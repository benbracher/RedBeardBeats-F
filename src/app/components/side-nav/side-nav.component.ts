import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    authed: any;

  constructor(private breakpointObserver: BreakpointObserver) {
    if (sessionStorage.getItem('pirate_ship') !== null) {
      this.authed = true;
    }
    else {
      this.authed = false;
    }
    console.log(this.authed);
  }

}
