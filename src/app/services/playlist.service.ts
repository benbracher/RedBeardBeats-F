import { Injectable } from '@angular/core';
import { Playlist } from '../models/Playlist';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PlaylistService {

  ApiUrl: 'https://localhost:44311/api'

  constructor(private _http: HttpClient) { }

  getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }

  getPlaylists() {
    return this._http.get('${ApiUrl}/Playlists', { headers: this.getHeaders()});
  }

  createPlaylist(playlist: Playlist) {
    return this._http.post(`${this.ApiUrl}/Playlists`, playlist, { headers: this.getHeaders()});
  }

  getPlaylist(id: string) {
    return this._http.get(`${this.ApiUrl}/Playlists/${id}`, {headers: this.getHeaders()});
  }

  updatePlaylist(playlist: Playlist) {
    return this._http.put(`${this.ApiUrl}/Playlists`, playlist, { headers: this.getHeaders()});
  }
  deletePlaylist(id: number) {
    return this._http.delete(`${this.ApiUrl}/Playlists/${id}`, { headers: this.getHeaders()});  }

  


}
