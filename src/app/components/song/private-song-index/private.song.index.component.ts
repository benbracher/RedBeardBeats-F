import { Component, OnInit, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Song } from 'src/app/models/Song';
import { SongService } from 'src/app/services/song.service';
import { PlayControlsService } from 'src/app/services/play-controls.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { SongDetailComponent } from '../song-detail/song-detail.component';
import { ActivatedRoute } from '@angular/router';
import { SongDeleteComponent } from '../song-delete/song-delete.component';
import { SongUpdateComponent } from '../song-update/song-update.component';
import { SongCreateComponent } from '../song-create/song.create.component';
import { PlaylistCollectionCreateComponent } from '../../playlist-collection/pc-create/playlist-collection-create.component';

@Component({
  selector: 'app-song',
  templateUrl: './private.song.index.component.html',
  styleUrls: ['./private.song.index.component.css']
})

export class PrivateSongIndexComponent implements OnInit {

  userid = parseInt(sessionStorage.getItem('freebooter'), 10);

  songDetailComponentDialogRef: MatDialogRef<SongDetailComponent>;

  columnNames = [
    'PlaySong',
    'SongTitle',
    'SongArtist',
    'SongAlbum',
    'SongGenre',
    'SongLength',
    'buttons'
  ]
  dataSource: MatTableDataSource<Song>;
  songSelect: Song[];
  song: Song;
  privateSongs = [];

  constructor(private _songService: SongService, private _playControlsService: PlayControlsService, private dialog: MatDialog, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this._songService
      .getSongs()
      .subscribe((songs: Song[]) => {
        console.log(songs)
        for(let item of songs){
          if(item.ownerId == this.userid){
            this.privateSongs.push(item)
          }
        }
        console.log(this.privateSongs)
        this.dataSource = new MatTableDataSource<Song>(this.privateSongs);
      });
  }

  playSong(song) {
    this._playControlsService.playSong(song.uploadedLink);
  }

  openSongCreate() {
    const dialogRef = this.dialog.open(SongCreateComponent)
    dialogRef.afterClosed().subscribe(result => {
      if (result == 1) {
        this._songService
          .getSongs()
          .subscribe((songs: Song[]) => {
            this.dataSource = new MatTableDataSource<Song>(songs);
          });
      }
    })
  }

  openSongToPlaylistAssignment() {
    const dialogRef = this.dialog.open(PlaylistCollectionCreateComponent)
  }

  openSongDetail(id) {
    const dialogRef = this.dialog.open(SongDetailComponent, {
      data: {
        id
      }
    })
  }

  openSongUpdate(id) {
    const dialogRef = this.dialog.open(SongUpdateComponent, {
      data: {
        id
      }
    })
  }

  openSongDelete(id) {
    const dialogRef = this.dialog.open(SongDeleteComponent, {
      data: {
        id
      }
    })
    dialogRef.afterClosed().subscribe(result => {
      if (result == 1) {
        this.dataSource.filterPredicate = function (data, filter: string): boolean {
          return (data.songEntityId !== +filter);
        }
        this.dataSource.filter = id;
      }
    })
  }
}