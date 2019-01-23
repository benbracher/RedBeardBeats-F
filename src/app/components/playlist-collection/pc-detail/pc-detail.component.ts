import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaylistCollectionService } from 'src/app/services/playlist-collection.service';
import { PlayControlsService } from 'src/app/services/play-controls.service';
import { PlaylistDetail } from '../../../models/PlaylistCollection-Detail';
import { Playlist } from '../../../models/Playlist';
import { PlaylistIndex } from '../../../models/PlaylistCollection-Index';
import { NgControlStatus } from '@angular/forms';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { PlaylistCollectionCreateComponent } from '../pc-create/playlist-collection-create.component';

@Component({
  selector: 'app-pc-detail',
  templateUrl: './pc-detail.component.html',
  styleUrls: ['./pc-detail.component.css']
})
export class PlaylistCollectionDetailComponent implements OnInit {
  columnNames = [
    'PlaySong',
    'SongTitle',
    'SongArtist',
    'OwnerId',
    'SongAlbum',
    'SongGenre',
    'SongLength'
  ]
  dataSource: MatTableDataSource<Playlist>;
  playlistSelect: Playlist[];

  playlist: PlaylistDetail;
  playlistName: PlaylistIndex;

  constructor(private _activatedRoute: ActivatedRoute, private _playlistService: PlaylistCollectionService, private _playControlsService: PlayControlsService, private dialog: MatDialog) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      console.log(routeData.get('id'))
      this._playlistService
        .getPlaylist(routeData.get('id'))
        .subscribe((playlist: Playlist[]) => {
          console.log(playlist)
          this.dataSource = new MatTableDataSource<Playlist>(playlist);
        });
    });
  };

  playSong(song) {
    this._playControlsService.playSong(song.uploadedLink);
  }

  openSongToPlaylistAssignment(){
    const dialogRef = this.dialog.open(PlaylistCollectionCreateComponent)
  }

}
