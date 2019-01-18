import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Song } from 'src/app/models/Song';
import { SongService } from 'src/app/services/song.service';

@Component({
  selector: 'app-song',
  templateUrl: './song.index.component.html',
  styleUrls: ['./song.index.component.css']
})
export class SongIndexComponent implements OnInit {
  columnNames = [
    'details',
    'SongTitle',
    'SongArtist',
    'OwnerId',
    'SongAlbum',
    'SongGenre',
    'SongLength',
    'buttons'
  ]
  dataSource: MatTableDataSource<Song>;
  songSelect: Song[];

  constructor(private _songService: SongService,) { }

  ngOnInit() {
    this._songService
    .getSongs()
    .subscribe((songs: Song[]) => {
      this.dataSource = new MatTableDataSource<Song>(songs);
    });
  }

}
