import { Component, OnInit, ViewChild } from '@angular/core';
import { PlayControlsService } from '../../services/play-controls.service';

@Component({
  selector: 'app-play-controls',
  templateUrl: './play-controls.component.html',
  styleUrls: ['./play-controls.component.css']
})
export class PlayControlsComponent implements OnInit {
  @ViewChild('playControls')
  playControlsRef;
  playControls: any;

  constructor(private playControlsSer: PlayControlsService) {
    playControlsSer.playSong$.subscribe(uploadedLink => {
      this.playSong(uploadedLink);
    });
    playControlsSer.pauseSong$.subscribe(() => {
      this.pauseSong();
    });
   }

  ngOnInit() {
    this.playControls = this.playControlsRef.nativeElement;
  }

  playSong(uploadedLink) {
    this.playControls.src = uploadedLink;
    this.playControls.play();
  }

  pauseSong(){
    this.playControls.pause();
  }

  playControlsEnded() {
    this.playControlsSer.songEnded();
  }

}
