import { Component, OnInit, Input } from '@angular/core';
import { PlaylistService } from '../../../services/playlist.service';
import { Playlist } from '../../../models/Playlist';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-playlist-index',
  templateUrl: './playlist-index.component.html',
  styleUrls: ['./playlist-index.component.css']
})
export class PlaylistIndexComponent implements OnInit {

  playlists: Object;

  constructor(private _playlistService: PlaylistService){}

  ngOnInit(){
    this._playlistService.getPlaylists().subscribe(p => this.playlists = p)
  }

}
