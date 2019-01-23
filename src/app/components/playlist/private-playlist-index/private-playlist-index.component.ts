import { Component, OnInit, Input } from '@angular/core';
import { PlaylistService } from '../../../services/playlist.service';
import { Playlist } from '../../../models/Playlist';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { PlaylistCreateComponent } from '../playlist-create/playlist-create.component';
import { PlaylistCollectionCreateComponent } from '../../playlist-collection/pc-create/playlist-collection-create.component';
import { PlaylistDeleteComponent } from '../playlist-delete/playlist-delete.component';
import { PlaylistEditComponent } from '../playlist-edit/playlist-edit.component';
import { PlaylistCollectionDeleteComponent } from '../../playlist-collection/pc-delete/pc-delete.component';

@Component({
  selector: 'app-playlist-index',
  templateUrl: './private-playlist-index.component.html',
  styleUrls: ['./private-playlist-index.component.css']
})
export class PrivatePlaylistIndexComponent implements OnInit {

  userid = parseInt(sessionStorage.getItem('freebooter'), 10);

  playlists = [];
  playlist: any;
  dataSource: MatTableDataSource<Playlist>;

  constructor(private _playlistService: PlaylistService, private dialog: MatDialog){}

  ngOnInit(){
    this._playlistService.getPlaylists().subscribe(p => {
      this.playlist = p
      for(let item of this.playlist){
        if(item.ownerId == this.userid){
          this.playlists.push(item)
          console.log(item)
        }
      }
    })
  }

  openPlaylistCreate(){
    const dialogRef = this.dialog.open(PlaylistCreateComponent)
    dialogRef.afterClosed().subscribe( result => { 
    })
  }

  openSongToPlaylistAssignment(){
    const dialogRef = this.dialog.open(PlaylistCollectionCreateComponent)
  }

  openPlaylistUpdate(id) {
    const dialogRef = this.dialog.open(PlaylistEditComponent, {
      data : {
        id
      }
    })
  }

  openPlaylistDelete(id) {
    const dialogRef = this.dialog.open(PlaylistDeleteComponent, {
      data : {
        id
      }
    })
    dialogRef.afterClosed().subscribe( result => {
      if(result==1){
        this.dataSource.filterPredicate = function(data, filter: string): boolean {
          return (data.playlistEntityId !== +filter);
        }
        this.dataSource.filter = id;
      }
    })
  }

  openPlaylistCollectionDelete(id) {
    const dialogRef = this.dialog.open(PlaylistCollectionDeleteComponent, {
      data : {
        id
      }
    })
  }

}
