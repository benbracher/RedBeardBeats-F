import { Component, OnInit, Inject } from '@angular/core';
import { Song } from 'src/app/models/Song';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { SongService } from 'src/app/services/song.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-song-update',
  templateUrl: './song-update.component.html',
  styleUrls: ['./song-update.component.css']
})

export class SongUpdateComponent implements OnInit {

  song: Song;
  editSongForm: FormGroup;
  file: any;
  songId: string;
  progressBar: boolean;

  constructor(
    private _form: FormBuilder,
    private _songService: SongService,
    private _ar: ActivatedRoute,
    private _router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { 
    this._ar.paramMap.subscribe(p => {
      this.songId = this.data.id
      this._songService.getSongById(this.data.id).subscribe((singleSong: Song) => {
        this.song = singleSong;
        this.createForm(this.song);
      });
    });
  }

  createForm(song: any){

    this.editSongForm = this._form.group({
      SongEntityId: new FormControl(this.song.songEntityId),
      SongTitle: new FormControl(this.song.songTitle),
      SongArtist: new FormControl(this.song.songArtist),
      SongAlbum: new FormControl(this.song.songAlbum),
      SongGenre: new FormControl(this.song.songEntityId),
      SongLength: new FormControl(this.song.songEntityId),
      UploadedFile: new FormControl(this.song.uploadedFile)

    })
  }

  ngOnInit() {
  }

  onFileChanged(event: any) {
    this.file = event.target.files;
    console.log(this.file)
  }
  
  onSubmit(songForm){
    console.log(songForm.value["SongEntityId"])
    this.progressBar = true;
    const formData = new FormData();
    formData.append("UploadedFile", this.file[0], this.file.name);
    formData.append("SongArtist", songForm.value["SongArtist"]);
    formData.append("SongTitle", songForm.value["SongTitle"]);
    formData.append("SongGenre", songForm.value["SongGenre"]);
    formData.append("SongLength", songForm.value["SongLength"]);
    formData.append("SongAlbum", songForm.value["SongAlbum"]);
    formData.append("SongEntityId", this.songId);

    this._songService.updateSong(formData).subscribe(data => {
      this._router.navigate(['/song/index']);
    });
  }
}
