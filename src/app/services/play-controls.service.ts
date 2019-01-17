import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayControlsService {
    constructor() { }

    private playSongSource = new Subject<string>();
    private pauseSongSource = new Subject();
    private songEndedSource = new Subject();

    playSong$ = this.playSongSource.asObservable();
    pauseSong$ = this.pauseSongSource.asObservable();
    songEnded$ = this.songEndedSource.asObservable();

    playSong(uploadedLink: string) {
      this.playSongSource.next(uploadedLink);
    }
  
    pauseSong() {
      this.pauseSongSource.next();
    }
  
    songEnded() {
      this.songEndedSource.next();
    }
}
