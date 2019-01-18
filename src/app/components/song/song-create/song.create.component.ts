import { Component, OnInit } from '@angular/core';
import { SongService } from '../../../services/song.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-song-create',
  templateUrl: './song.create.component.html'
  //styleUrls: ['./song-create.component.css']
})
export class SongCreateComponent implements OnInit {

  songForm: FormGroup;
  file: any;

  constructor(private _songService: SongService, private _form: FormBuilder, private _router: Router) {
    this.createForm();
    this.file = [];
   }

  ngOnInit() {
  }

  createForm() {
    this.songForm = this._form.group({
      SongArtist: new FormControl,
      SongTitle: new FormControl,
      SongGenre: new FormControl,
      SongLength: new FormControl,
      SongAlbum: new FormControl
    });
  }

  onFileChanged(event: any) {
    this.file = event.target.files;
    console.log(this.file)
  }

  onSubmit(){

    const formData = new FormData();
    formData.append("UploadedFile", this.file[0], this.file.name);
    formData.append("SongArtist", this.songForm.value["Artist"]);
    formData.append("SongTitle", this.songForm.value["Title"]);
    formData.append("SongGenre", this.songForm.value["Genre"]);
    formData.append("SongLength", this.songForm.value["Length"]);
    formData.append("SongAlbum", this.songForm.value["Album"]);

    console.log(formData.get("Song"))
    this._songService.createSong(formData).subscribe(data => {

      this._router.navigate(['/']);
    });
  }
}