import { Component, OnInit } from '@angular/core';
import { PlaylistCollectionService} from '../../../services/playlist-collection.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playlist-collection-create',
  templateUrl: './playlist-collection-create.component.html',
  styleUrls: ['./playlist-collection-create.component.css']
})
export class PlaylistCollectionCreateComponent implements OnInit {

  playlistForm: FormGroup;

  constructor(private _playlistService: PlaylistCollectionService, private _form: FormBuilder, private _router: Router) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.playlistForm = this._form.group({
      PlaylistEntityId: Number,
      SongEntityId: Number,
    })
  }

  onSubmit() {
    this._playlistService.createPlaylistCollection(this.playlistForm.value).subscribe(data => {
      this._router.navigate(['/playlist/index'])
    })
  }

}
