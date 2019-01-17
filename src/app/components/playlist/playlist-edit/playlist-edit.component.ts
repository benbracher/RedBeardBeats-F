import { Component, OnInit, createPlatformFactory } from '@angular/core';
import { Playlist } from 'src/app/models/Playlist';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { PlaylistService } from 'src/app/services/playlist.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-playlist-edit',
  templateUrl: './playlist-edit.component.html',
  styleUrls: ['./playlist-edit.component.css']
})
export class PlaylistEditComponent implements OnInit {

  playlist: Playlist;

  editPlaylistForm: FormGroup;
  playlistService: any;
  _playlistService: any;
  constructor(private _form: FormBuilder,
              private _playlist: PlaylistService,
              private _ar: ActivatedRoute,
              private _router: Router) {

    this._ar.paramMap.subscribe(p => {
      this.playlistService.getPlaylist(p.get('id')).subscribe((singlePlaylist: Playlist) => {
        this.playlist = singlePlaylist;
        this.createForm();
      });
  });
}

  ngOnInit() {
  }

  createForm() {
    this.editPlaylistForm = this._form.group({
      pid: new FormControl(this.playlist.pid),
      playlistName: new FormControl(this.playlist.playlistName)
    });
  }
 
  onSubmit(form) {
    const updatePlaylist: Playlist = {
      pid: form.value.pid,
      playlistName: form.value.playlistName,
    };
    this._playlistService.updatePlaylist(updatePlaylist).subscribe(d => {
      this._router.navigate(['/playlists'])
    });
  }
}
