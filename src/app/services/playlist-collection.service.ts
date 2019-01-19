import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PlaylistIndex } from '../models/pc-index';

const ApiUrl = 'https://localhost:44311';

@Injectable()
export class PlaylistCollectionService {
  constructor(private _http: HttpClient) {}

  getPlaylists() {
    return this._http.get(`${ApiUrl}/api/PlaylistCollection`, {
      headers: this.getHeaders()
    });
  }

  getPlaylist(id: string) {
    console.log(id)
    return this._http.get(`${ApiUrl}/api/PlaylistCollection/${id}`, { headers: this.getHeaders() });
  }

  createPlaylistCollection(playlist: PlaylistIndex) {
    return this._http.post(`${ApiUrl}/api/PlaylistCollection`, playlist, {
      headers: this.getHeaders()
    });
  }

  udpatePlaylistCollection(playlist: PlaylistIndex){
    return this._http.put(`${ApiUrl}/api/Playlist`, playlist, { headers: this.getHeaders() });
  }

  deletePlaylistCollection(id: number) {
    
    return this._http.delete(`${ApiUrl}/api/PlaylistCollection/${id}`, { headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set(
      'Authorization',
      `Bearer ${localStorage.getItem('pirate_ship')}`
    );
  }
}