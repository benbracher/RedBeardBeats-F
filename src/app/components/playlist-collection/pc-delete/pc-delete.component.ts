import { Component, OnInit, Inject } from '@angular/core';
import { PlaylistCollectionService } from 'src/app/services/playlist-collection.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaylistIndex } from 'src/app/models/pc-index';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-pc-delete',
  templateUrl: './pc-delete.component.html',
  styleUrls: ['./pc-delete.component.css']
})

export class PlaylistCollectionDeleteComponent implements OnInit {

  playlist: PlaylistIndex;
  playlistId: any;

  constructor(private _playlistService: PlaylistCollectionService, private _ar: ActivatedRoute, private _router: Router, @Inject(MAT_DIALOG_DATA) public data: any) {
    this._ar.paramMap.subscribe(p => {
      this.playlistId = this.data.id
      this._playlistService.getPlaylist(this.data.id).subscribe((singlePlaylist: PlaylistIndex) => {
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
