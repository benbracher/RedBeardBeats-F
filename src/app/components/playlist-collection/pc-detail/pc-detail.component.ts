import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaylistCollectionService } from 'src/app/services/playlist-collection.service';
import { PlayControlsService } from 'src/app/services/play-controls.service';
import { PlaylistDetail } from 'src/app/models/pc-detail';
import { NgControlStatus } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { Playlist } from '../../../models/Playlist';
import { PlaylistIndex } from 'src/app/models/pc-index';

@Component({
  selector: 'app-pc-detail',
  templateUrl: './pc-detail.component.html',
  styleUrls: ['./pc-detail.component.css']
})

export class PlaylistCollectionDetailComponent implements OnInit {
  columnNames = [
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

  constructor(private _activatedRoute: ActivatedRoute, private _playlistService: PlaylistCollectionService, private _playControlsService: PlayControlsService) { }

  ngOnInit() {

    // this._activatedRoute.paramMap.subscribe(routeData => {
    //   console.log(routeData.get('id'))
    //   this._playlistService.getPlaylist(routeData.get('id')).subscribe((singlePlaylist: PlaylistDetail) => {
    //     this.playlist = singlePlaylist;
    //     console.log(this.playlist)
    //   });
    // });

    this._activatedRoute.paramMap.subscribe(routeData => {
      console.log(routeData.get('id'))
      this._playlistService
        .getPlaylist(routeData.get('id'))
        .subscribe((playlist: Playlist[]) => {
          this.dataSource = new MatTableDataSource<Playlist>(playlist);
        });
    });
  };

  playSong(song) {
    this._playControlsService.playSong(song.uploadedLink);
  }

}
