import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PlaylistIndex } from '../models/pc-index';

@Injectable()
export class PlaylistCollectionService {
  constructor(private _http: HttpClient) {}

  getPlaylists() {
    return this._http.get(`${environment.serverUrl}/api/PlaylistCollection`, {
      headers: this.getHeaders()
    });
  }

  getPlaylist(id: string) {
    console.log(id)
    return this._http.get(`${environment.serverUrl}/api/PlaylistCollection/${id}`, { headers: this.getHeaders() });
  }

  createPlaylistCollection(playlist: PlaylistIndex) {
    return this._http.post(`${environment.serverUrl}/api/PlaylistCollection`, playlist, {
      headers: this.getHeaders()
    });
  }

  udpatePlaylistCollection(playlist: PlaylistIndex){
    return this._http.put(`${environment.serverUrl}/api/Playlist`, playlist, { headers: this.getHeaders() });
  }

  deletePlaylistCollection(id: number) {
    return this._http.delete(`${environment.serverUrl}/api/PlaylistCollection/${id}`, { headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set(
      'Authorization',
      `Bearer ${sessionStorage.getItem('pirate_ship')}`
    );
  }
}