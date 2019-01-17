import { Component, OnInit } from '@angular/core';
import { PlaylistCollectionService } from '../../../services/playlist-collection.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Playlist } from 'src/app/models/Playlist';
import { PlaylistDetail } from 'src/app/models/pc-detail';
import { PlaylistService } from 'src/app/services/playlist.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-playlist-collection-create',
  templateUrl: './playlist-collection-create.component.html',
  styleUrls: ['./playlist-collection-create.component.css']
})
export class PlaylistCollectionCreateComponent implements OnInit {

  playlistForm: FormGroup;
  playlistSelect: Playlist[];
  songSelect: PlaylistDetail;
  dataSource: MatTableDataSource<Playlist>;

  constructor(private _playlistService: PlaylistCollectionService, 
    private _getplaylistService: PlaylistService, 
    private _form: FormBuilder, 
    private _router: Router, 
    private _activatedRoute: ActivatedRoute)
  {
    this.createForm();
  }

  ngOnInit() {
    this._getplaylistService.getPlaylists().subscribe(res => this.playlistSelect = res as Playlist[])
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
