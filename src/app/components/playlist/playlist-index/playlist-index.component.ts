import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../../../services/playlist.service';
import { Playlist } from '../../../models/Playlist';
import { RegisterComponent } from '../../register/register.component';
import { MatTableDataSource } from '@angular/material';
import { LoginComponent } from '../../login/login.component';
import { PlaylistCreateComponent } from '../playlist-create/playlist-create.component';

const routes = [
  {path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent },
  {
    path: 'playlists', children: [
      { path: 'create', component:PlaylistCreateComponent }
    ]
  },
  { path: '**', component: RegisterComponent}
];

@Component({
  selector: 'app-playlist-index',
  templateUrl: './playlist-index.component.html',
  styleUrls: ['./playlist-index.component.css']
})
export class PlaylistIndexComponent implements OnInit {

  constructor(private _playlistService: PlaylistService) { }

  ngOnInit() {
    this._playlistService.getPlaylists().subscribe((playlists: Playlist[]) => {
    });
  }
  columnNames = ['playlistName', 'pid','sid', 'oid'];
  dataSource: MatTableDataSource<Playlist>
}
