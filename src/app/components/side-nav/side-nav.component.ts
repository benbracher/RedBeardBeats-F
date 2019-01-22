import { MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from './../login/login.component';
import { ReloadService } from './../../services/reload.service';
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  logout() {
    sessionStorage.clear();
    this.authed = false;
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    authed: any;

  constructor(private breakpointObserver: BreakpointObserver, private _reload: ReloadService, private dialog: MatDialog, private dialogRef: MatDialogRef<SideNavComponent>) {
    if (sessionStorage.getItem('pirate_ship') !== null) {
      this.authed = true;
    }
    else {
      this.authed = false;
    }
    console.log(this.authed);
  }
  openDialog(){
    const dialogRef = this.dialog.open(LoginComponent)
    dialogRef.afterClosed().subscribe(result => {
      if(result == 1){
        console.log(result)
        if (sessionStorage.getItem('pirate_ship') !== null) {
          this.authed = true;
        }
        else {
          this.authed = false;
        }
      }
    })
  }
  onLogin(){
    this.dialogRef.close();
  }

}
