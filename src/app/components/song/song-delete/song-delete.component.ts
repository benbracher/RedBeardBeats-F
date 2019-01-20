import { Component, OnInit } from '@angular/core';
import { SongService } from 'src/app/services/song.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Song } from 'src/app/models/Song';

@Component({
  selector: 'app-song-delete',
  templateUrl: './song-delete.component.html',
  styleUrls: ['./song-delete.component.css']
})

export class SongDeleteComponent implements OnInit {

  song: Song;
  songId: any;

  constructor(
    private _songService: SongService,
    private _ar: ActivatedRoute,
    private _router: Router) 
    { 
      this._ar.paramMap.subscribe(p => {
        this.songId = p.get('id')
        this._songService.getSongById(p.get('id')).subscribe((singleSong: Song) => {
          this.song = singleSong;
        });
      });
    }

  ngOnInit() {
  }

  onDelete() {
    this._songService.deleteSong(this.songId).subscribe(() => {
      this._router.navigate(['/song/index']);
    })
  }

}
