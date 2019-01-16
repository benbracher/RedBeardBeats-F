import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaylistIndex } from 'src/app/models/pc-index';
import { PlaylistCollectionService } from 'src/app/services/playlist-collection.service';

@Component({
  selector: 'app-pc-detail',
  templateUrl: './pc-detail.component.html',
  styleUrls: ['./pc-detail.component.css']
})
export class PlaylistDetailComponent implements OnInit {

  playlist: PlaylistIndex;

  constructor(private _activatedRoute: ActivatedRoute, private _playlistService: PlaylistCollectionService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._playlistService.getPlaylist(routeData.get('id')).subscribe((singlePlaylist: PlaylistIndex) => {
        this.playlist = singlePlaylist;
      })
    })
  }

}
