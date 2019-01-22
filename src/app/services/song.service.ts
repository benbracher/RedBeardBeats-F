import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Song } from '../models/Song';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})


export class SongService {
  
  constructor(private _http: HttpClient) { }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${sessionStorage.getItem('pirate_ship')}`);
  }
  getSongs() {
    return this._http.get(`${environment.serverUrl}/api/Song`, { headers: this.getHeaders() });
  }
  getSongById(id:string){
    return this._http.get(`${environment.serverUrl}/api/Song/${id}`, { headers: this.getHeaders() });
  }
  createSong(song: FormData) {
    return this._http.post(`${environment.serverUrl}/api/Song`, song, { headers: this.getHeaders()});
  }
  updateSong(song: FormData){
    return this._http.put(`${environment.serverUrl}/api/Song`, song, { headers: this.getHeaders() });
  }
  deleteSong(id: number) {
    return this._http.delete(`${environment.serverUrl}/api/Song/${id}`, { headers: this.getHeaders() });
  }
}