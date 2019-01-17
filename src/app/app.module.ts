import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { 
  MatToolbarModule,
  MatButtonModule,
  MatTableModule,
  MatInputModule
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/register/register.component';
import { SongComponent } from './components/song/song.component';
import { PlaylistCollectionIndexComponent } from './components/playlist-collection/pc-index/playlist-collection-index.component';
import { PlaylistCollectionCreateComponent } from './components/playlist-collection/pc-create/playlist-collection-create.component'
import { PlaylistDetailComponent } from './components/playlist-collection/pc-detail/pc-detail.component';
import { PlaylistDeleteComponent } from './components/playlist-collection/pc-delete/pc-delete.component';
import { AdminPortalComponent } from './components/admin-portal/admin-portal.component';
import { PlayControlsComponent } from './components/play-controls/play-controls.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { PlaylistIndexComponent } from './components/playlist/playlist-index/playlist-index.component';
import { PlaylistCreateComponent } from './components/playlist/playlist-create/playlist-create.component';
import { AuthService } from './services/auth.service';
import { PlaylistService } from './services/playlist.service';

import { PlaylistCollectionService } from './services/playlist-collection.service';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatFormFieldModule,
  MatListModule,
  MatIconModule,
  MatSidenavModule
}
  from '@angular/material';
  
@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HomeComponent,
    LoginComponent,
    SongComponent,
    PlaylistComponent,
    PlaylistCollectionIndexComponent,
    PlaylistCollectionCreateComponent,
    PlaylistDetailComponent,
    PlaylistDeleteComponent,
    AdminPortalComponent,
    PlayControlsComponent,
    PlaylistIndexComponent,
    PlaylistCreateComponent,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    LayoutModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatToolbarModule,
    MatButtonModule, 
    MatTableModule,
    MatInputModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
     MatSidenavModule,
    MatIconModule,
    MatListModule,
    
  ],
  providers: [
    AuthService,
    PlaylistService,
    PlaylistCollectionService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
