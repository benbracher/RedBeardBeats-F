import { Component, OnInit } from '@angular/core';
import { PlaylistService } from 'src/app/services/playlist.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Playlist } from '../../../models/Playlist';

@Component({
  selector: 'app-playlist-delete',
  templateUrl: './playlist-delete.component.html',
  styleUrls: ['./playlist-delete.component.css']
})
export class PlaylistDeleteComponent implements OnInit {

  playlist: Playlist;
  playlistId: any;

  constructor(private _playlistService: PlaylistService, private _ar: ActivatedRoute, private _router: Router) {
    this._ar.paramMap.subscribe(p => {
      this.playlistId = p.get('id')
      this._playlistService.getPlaylistById(p.get('id')).subscribe((singlePlaylist: Playlist) => {
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
