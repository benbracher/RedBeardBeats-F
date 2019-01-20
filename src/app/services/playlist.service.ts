import { Injectable } from '@angular/core';
import { Playlist } from '../models/Playlist';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const ApiUrl = 'https://localhost:44311/api';

@Injectable({
  providedIn: 'root'
})

export class PlaylistService {

  constructor(private _http: HttpClient) { }

  getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('pirate_ship')}`);
  }

  getPlaylists() {
    return this._http.get(`${ApiUrl}/Playlist`, { headers: this.getHeaders()});
  }

  createPlaylist(playlist: Playlist) {
    return this._http.post(`${ApiUrl}/Playlist`, playlist, { headers: this.getHeaders()});
  }

  getPlaylistById(id: string) {
    return this._http.get(`${ApiUrl}/Playlist/${id}`, {headers: this.getHeaders()});
  }

  updatePlaylist(playlist: Playlist) {
    return this._http.put(`${ApiUrl}/Playlist`, playlist, { headers: this.getHeaders()});
  }

  deletePlaylist(id: number) {
    return this._http.delete(`${ApiUrl}/Playlist/${id}`, { headers: this.getHeaders()});
  }

}
