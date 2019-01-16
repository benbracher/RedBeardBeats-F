import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaylistCollectionService } from 'src/app/services/playlist-collection.service';
import { PlaylistDetail } from 'src/app/models/pc-detail';

@Component({
  selector: 'app-pc-detail',
  templateUrl: './pc-detail.component.html',
  styleUrls: ['./pc-detail.component.css']
})
export class PlaylistDetailComponent implements OnInit {

  playlist: PlaylistDetail;

  constructor(private _activatedRoute: ActivatedRoute, private _playlistService: PlaylistCollectionService) { }

  ngOnInit() {
    
    this._activatedRoute.paramMap.subscribe(routeData => {console.log(routeData.get('id'))
    this._playlistService.getPlaylist(routeData.get('id')).subscribe((singlePlaylist: PlaylistDetail) => {
      this.playlist = singlePlaylist;
      console.log(this.playlist)
      });
    });
  }

}
