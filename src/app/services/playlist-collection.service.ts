import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PlaylistIndex } from '../models/pc-index';

const ApiUrl = 'https://localhost:44311';

@Injectable({
  providedIn: 'root'
})
export class PlaylistCollectionService {
  constructor(private _http: HttpClient) {}

  getPlaylists() {
    return this._http.get(`${ApiUrl}/api/PlaylistCollection`, {
      headers: this.getHeaders()
    });
  }

  createPlaylistCollection(playlist: PlaylistIndex) {
    return this._http.post(`${ApiUrl}/api/PlaylistCollection`, playlist, {
      headers: this.getHeaders()
    });
  }

  private getHeaders() {
    return new HttpHeaders().set(
      'Authorization',
      `Bearer ${localStorage.getItem('id_token')}`
    );
  }
}