import { Playlist } from '../../../models/Playlist';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { PlaylistService } from 'src/app/services/playlist.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-playlist-edit',
  templateUrl: './playlist-edit.component.html',
  styleUrls: ['./playlist-edit.component.css']
})
export class PlaylistEditComponent implements OnInit {

  playlist: Playlist;
  editPlaylistForm: FormGroup;
  playlistId: number;

  constructor(private _form: FormBuilder,
    private _playlistService: PlaylistService,
    private _ar: ActivatedRoute,
    private _router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<PlaylistEditComponent>) {

    this._ar.paramMap.subscribe(p => {
      this.playlistId = this.data.id
      this._playlistService.getPlaylistById(this.data.id).subscribe((singlePlaylist: Playlist) => {
        this.playlist = singlePlaylist;
        this.createForm();
      });
    });
  }

  ngOnInit() {
  }

  createForm() {
    this.editPlaylistForm = this._form.group({
      PlaylistEntityId: new FormControl(this.playlist.playlistEntityId),
      PlaylistName: new FormControl(this.playlist.playlistName)
    });
  }

  onSubmit(form) {
    const updatePlaylist: Playlist = {
      playlistEntityId: this.playlistId,
      playlistName: form.value.PlaylistName
    };
    console.log(updatePlaylist)
    this._playlistService.updatePlaylist(updatePlaylist).subscribe(d => {
      this.dialogRef.close();
      this._router.navigate(['/playlist/index'])
    });
  }
}
