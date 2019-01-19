import { Component, OnInit } from '@angular/core';
import { Song } from 'src/app/models/Song';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { SongService } from 'src/app/services/song.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-song-update',
  templateUrl: './song-update.component.html',
  styleUrls: ['./song-update.component.css']
})

export class SongUpdateComponent implements OnInit {

  song: Song;
  editSongForm: FormGroup;
  file: any;

  constructor(
    private _form: FormBuilder,
    private _songService: SongService,
    private _ar: ActivatedRoute,
    private _router: Router
  ) { 
    this._ar.paramMap.subscribe(p => {
      this._songService.getSongById(p.get('id')).subscribe((singleSong: Song) => {
        this.song = singleSong;
        this.createForm(this.song);
      });
    });
  }

  createForm(song: any){

    this.editSongForm = this._form.group({
      SongEntityId: new FormControl(this.song.SongEntityId),
      SongTitle: new FormControl(this.song.SongTitle),
      SongArtist: new FormControl(this.song.SongArtist),
      SongAlbum: new FormControl(this.song.SongAlbum),
      SongGenre: new FormControl(this.song.SongEntityId),
      SongLength: new FormControl(this.song.SongEntityId),

    })
  }

  ngOnInit() {
  }

  onFileChanged(event: any) {
    this.file = event.target.files;
    console.log(this.file)
  }
  
  onSubmit(form){
    const formData = new FormData();
    const updateSong: Song = {
      SongEntityId: form.value.SongEntityId,
      SongTitle: form.value.SongTitle,
      SongArtist: form.value.SongArtist,
      SongAlbum: form.value.SongAlbum,
      SongGenre: form.value.SongGenre,
      SongLength: form.value.SongLength,
      // UploadedFile: formData.append("UploadedFile", this.file[0], this.file.name)
    };
    this._songService.updateSong(updateSong).subscribe(data => {
      this._router.navigate(['/song/index']);
    });
  }
  

}
