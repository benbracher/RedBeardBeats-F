import { Component, OnInit } from '@angular/core';
import { PlaylistCollectionService } from 'src/app/services/playlist-collection.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaylistIndex } from 'src/app/models/pc-index';

@Component({
  selector: 'app-pc-delete',
  templateUrl: './pc-delete.component.html',
  styleUrls: ['./pc-delete.component.css']
})

export class PlaylistDeleteComponent implements OnInit {

  playlist: PlaylistIndex;
  playlistId: any;

  constructor(private _playlistService: PlaylistCollectionService, private _ar: ActivatedRoute, private _router: Router) {
    this._ar.paramMap.subscribe(p => {
      this.playlistId = p.get('id')
      this._playlistService.getPlaylist(p.get('id')).subscribe((singlePlaylist: PlaylistIndex) => {
        this.playlist = singlePlaylist;
        console.log(this.playlist)
      });
    });
  }

  onDelete(){
    this._playlistService.deletePlaylistCollection(this.playlistId).subscribe(() => {
      this._router.navigate(['/playlist/index']);
    });
  }


  ngOnInit() {
  }

}
