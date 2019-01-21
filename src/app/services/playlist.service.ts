import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Playlist } from '../models/Playlist';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PlaylistService {

  constructor(private _http: HttpClient) { }

  getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${sessionStorage.getItem('pirate_ship')}`);
  }

  getPlaylists() {
    return this._http.get(`${environment.serverUrl}/api/Playlist`, { headers: this.getHeaders()});
  }

  createPlaylist(playlist: Playlist) {
    return this._http.post(`${environment.serverUrl}/api/Playlist`, playlist, { headers: this.getHeaders()});
  }

  getPlaylistById(id: string) {
    return this._http.get(`${environment.serverUrl}/api/Playlist/${id}`, {headers: this.getHeaders()});
  }

  updatePlaylist(playlist: Playlist) {
    return this._http.put(`${environment.serverUrl}/api/Playlist`, playlist, { headers: this.getHeaders()});
  }

  deletePlaylist(id: number) {
    return this._http.delete(`${environment.serverUrl}/api/Playlist/${id}`, { headers: this.getHeaders()});
  }

}
