import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { PlaylistCollectionService } from 'src/app/services/playlist-collection.service';
import { PlaylistIndex} from 'src/app/models/pc-index';
import { Playlist } from 'src/app/models/Playlist';
import { PlaylistService } from 'src/app/services/playlist.service';

@Component({
  selector: 'app-playlist-collection',
  templateUrl: './playlist-collection-index.component.html',
  styleUrls: ['./playlist-collection-index.component.css']
})
export class PlaylistCollectionIndexComponent implements OnInit {
  columnNames = [
    'details',
    'PlaylistEntityId',
    'SongEntityId',
    'OwnerId',
    'DateCreated',
    'buttons'
  ];
  dataSource: MatTableDataSource<PlaylistIndex>;

  constructor(private _playlistcollectionService: PlaylistCollectionService) {}

  ngOnInit() {
    this._playlistcollectionService
      .getPlaylists()
      .subscribe((playlists: PlaylistIndex[]) => {
        this.dataSource = new MatTableDataSource<PlaylistIndex>(playlists);
      });
  }
}
