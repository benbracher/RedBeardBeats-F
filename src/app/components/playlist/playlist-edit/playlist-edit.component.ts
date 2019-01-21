import { Component, OnInit } from '@angular/core';
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

  constructor(private _form: FormBuilder,
    private _playlistService: PlaylistService,
    private _ar: ActivatedRoute,
    private _router: Router) {

    this._ar.paramMap.subscribe(p => {
      this._playlistService.getPlaylistById(p.get('id')).subscribe((singlePlaylist: Playlist) => {
        this.playlist = singlePlaylist;
        this.createForm();
      });
    });
  }

  ngOnInit() {
  }

  createForm() {
    this.editPlaylistForm = this._form.group({
      PlaylistEntityId: new FormControl(this.playlist.PlaylistEntityId),
      OwnerId: new FormControl(this.playlist.OwnerId),
      PlaylistName: new FormControl(this.playlist.PlaylistName)
    });
  }

  onSubmit(form) {
    const updatePlaylist: Playlist = {
      PlaylistEntityId: form.value.PlaylistEntityId,
      PlaylistName: form.value.PlaylistName,
      OwnerId: form.value.OwnerId
    };
    console.log(updatePlaylist)
    this._playlistService.updatePlaylist(updatePlaylist).subscribe(d => {
      this._router.navigate(['/playlist/index'])
    });
  }
}
