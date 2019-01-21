import { Component, OnInit } from '@angular/core';
import { PlaylistCollectionService } from '../../../services/playlist-collection.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Playlist } from 'src/app/models/Playlist';
import { PlaylistService } from 'src/app/services/playlist.service';
import { MatTableDataSource } from '@angular/material';
import { Song } from 'src/app/models/Song';
import { SongService } from 'src/app/services/song.service';

@Component({
  selector: 'app-playlist-collection-create',
  templateUrl: './playlist-collection-create.component.html',
  styleUrls: ['./playlist-collection-create.component.css']
})
export class PlaylistCollectionCreateComponent implements OnInit {

  playlistForm: FormGroup;
  playlistSelect: Playlist[];
  songSelect: Song[];
  dataSource: MatTableDataSource<Playlist>;

  constructor(private _playlistService: PlaylistCollectionService, 
    private _getplaylistService: PlaylistService, 
    private _getsongService: SongService,
    private _form: FormBuilder, 
    private _router: Router, 
    private _activatedRoute: ActivatedRoute)
  {
    this.createForm();
  }

  ngOnInit() {
    this._getplaylistService.getPlaylists().subscribe(res =>{ this.playlistSelect = res as Playlist[]; console.log(this.playlistSelect)}) 
    this._getsongService.getSongs().subscribe(s => this.songSelect = s as Song[])
}

  createForm() {
    this.playlistForm = this._form.group({
      PlaylistEntityId: Number,
      SongEntityId: Number,
    })
  }

  onSubmit() {
    console.log(this.playlistForm.value)
    this._playlistService.createPlaylistCollection(this.playlistForm.value).subscribe(data => {
      this._router.navigate(['/playlist/index'])
    })
  }

}
