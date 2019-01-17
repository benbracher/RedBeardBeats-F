import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../../../services/playlist.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playlist-create',
  templateUrl: './playlist-create.component.html',
  styleUrls: ['./playlist-create.component.css']
})
export class PlaylistCreateComponent implements OnInit {

  playlistForm: FormGroup;

  constructor(private _playlistService: PlaylistService, private _form: FormBuilder, private _router: Router) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.playlistForm = this._form.group({
      Title: new FormControl,
    });
  }

  onSubmit() {
    this._playlistService.createPlaylist(this.playlistForm.value).subscribe(data => {
      this._router.navigate(['/playlist']);
    });
  }
}

