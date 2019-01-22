import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../../../services/playlist.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-playlist-create',
  templateUrl: './playlist-create.component.html',
  styleUrls: ['./playlist-create.component.css']
})
export class PlaylistCreateComponent implements OnInit {

  playlistForm: FormGroup;

  constructor(private _playlistService: PlaylistService, private _form: FormBuilder, private _router: Router, private dialogRef: MatDialogRef<PlaylistCreateComponent>) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.playlistForm = this._form.group({
      PlaylistName: new FormControl,
    });
  }

  onSubmit() {
    this._playlistService.createPlaylist(this.playlistForm.value).subscribe(data => {
      this.dialogRef.close();
      this._router.navigate(['/playlist/index']);
    });
  }
}

