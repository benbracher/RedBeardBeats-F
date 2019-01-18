import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { PlaylistService } from 'src/app/services/playlist.service';
import { Playlist } from 'src/app/models/Playlist';

@Component({
  selector: 'app-playlist-detail',
  templateUrl: './playlist-detail.component.html',
  styleUrls: ['./playlist-detail.component.css']
})
export class PlaylistDetailComponent implements OnInit {

  playlist : Playlist; 
  _playlistService: any;

  constructor(private _activatedRoute: ActivatedRoute, private _playlist: PlaylistService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._playlistService.getPlaylist(routeData.get('id')).subscribe((singlePlaylist: Playlist) => {
        this.playlist = singlePlaylist;
      });
    });
  }

}
