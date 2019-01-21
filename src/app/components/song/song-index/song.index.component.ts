import { Component, OnInit, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Song } from 'src/app/models/Song';
import { SongService } from 'src/app/services/song.service';
import { PlayControlsService } from 'src/app/services/play-controls.service';
import { MatDialog, MatDialogRef} from '@angular/material';
import { SongDetailComponent } from '../song-detail/song-detail.component';
import { ActivatedRoute } from '@angular/router';
import { SongDeleteComponent } from '../song-delete/song-delete.component';
import { SongUpdateComponent } from '../song-update/song-update.component';

@Component({
  selector: 'app-song',
  templateUrl: './song.index.component.html',
  styleUrls: ['./song.index.component.css']
})

export class SongIndexComponent implements OnInit {

  songDetailComponentDialogRef: MatDialogRef<SongDetailComponent>;

  columnNames = [
    'SongTitle',
    'SongArtist',
    'OwnerId',
    'SongAlbum',
    'SongGenre',
    'SongLength',
    'buttons'
  ]
  dataSource: MatTableDataSource<Song>;
  songSelect: Song[];
  song: Song;

  constructor(private _songService: SongService, private _playControlsService: PlayControlsService, private dialog: MatDialog, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this._songService
    .getSongs()
    .subscribe((songs: Song[]) => {
      this.dataSource = new MatTableDataSource<Song>(songs);
    });
  }

  playSong(song) {
    this._playControlsService.playSong(song.uploadedLink);
  }

  openSongDetail(id) {
    const dialogRef = this.dialog.open(SongDetailComponent, {
      data : {
        id
      }
    })
  }

  openSongUpdate(id) {
    const dialogRef = this.dialog.open(SongUpdateComponent, {
      data : {
        id
      }
    })
  }

  openSongDelete(id) {
    const dialogRef = this.dialog.open(SongDeleteComponent, {
      data : {
        id
      }
    })
  }
}