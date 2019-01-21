import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SongService } from 'src/app/services/song.service';
import { Song } from 'src/app/models/Song';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.css']
})
export class SongDetailComponent implements OnInit {

  song: Song;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _songService: SongService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._songService.getSongById(this.data.id).subscribe((singleSong: Song)=>{
        this.song = singleSong;
      });
    });
  }

}
