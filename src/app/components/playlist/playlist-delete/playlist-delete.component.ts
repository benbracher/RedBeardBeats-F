import { Component, OnInit, Inject } from '@angular/core';
import { PlaylistService } from 'src/app/services/playlist.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Playlist } from 'src/app/models/Playlist';
import { INJECTOR } from '@angular/core/src/render3/interfaces/view';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-playlist-delete',
  templateUrl: './playlist-delete.component.html',
  styleUrls: ['./playlist-delete.component.css']
})
export class PlaylistDeleteComponent implements OnInit {

  playlist: Playlist;
  playlistId: any;

  constructor(private _playlistService: PlaylistService, private _ar: ActivatedRoute, private _router: Router, @Inject(MAT_DIALOG_DATA) public data: any) {
    this._ar.paramMap.subscribe(p => {
      this.playlistId = this.data.id
      this._playlistService.getPlaylistById(this.data.id).subscribe((singlePlaylist: Playlist) => {
        this.playlist = singlePlaylist;
      });
    });
  }

  onDelete() {
    this._playlistService.deletePlaylist(this.playlistId).subscribe(() => {
      this._router.navigate(['/playlist/index']);
    });
  }
  
  ngOnInit() {
  }

}
