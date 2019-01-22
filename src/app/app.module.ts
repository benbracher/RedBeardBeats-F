import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { 
  MatToolbarModule,
  MatButtonModule,
  MatTableModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,  
  MatFormFieldModule,
  MatListModule,
  MatIconModule,
  MatSidenavModule,
  MatProgressBarModule,
  MatDialogModule
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/register/register.component';
import { SongIndexComponent } from './components/song/song-index/song.index.component';
import { PlaylistCollectionIndexComponent } from './components/playlist-collection/pc-index/playlist-collection-index.component';
import { PlaylistCollectionCreateComponent } from './components/playlist-collection/pc-create/playlist-collection-create.component'
import { PlaylistCollectionDetailComponent } from './components/playlist-collection/pc-detail/pc-detail.component';
import { PlaylistCollectionDeleteComponent } from './components/playlist-collection/pc-delete/pc-delete.component';
import { AdminPortalComponent } from './components/admin-portal/admin-portal.component';
import { PlayControlsComponent } from './components/play-controls/play-controls.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { PlaylistIndexComponent } from './components/playlist/playlist-index/playlist-index.component';
import { PlaylistCreateComponent } from './components/playlist/playlist-create/playlist-create.component';
import { SongCreateComponent } from './components/song/song-create/song.create.component'
import { SongDetailComponent } from './components/song/song-detail/song-detail.component';
import { SongDeleteComponent } from './components/song/song-delete/song-delete.component';
import { SongUpdateComponent } from './components/song/song-update/song-update.component';
import { AuthService } from './services/auth.service';
import { PlaylistService } from './services/playlist.service';
import { PlayControlsService } from './services/play-controls.service';
import { PlaylistCollectionService } from './services/playlist-collection.service';
import { SongService } from './services/song.service';
import { PlaylistEditComponent } from './components/playlist/playlist-edit/playlist-edit.component';
import { PlaylistDeleteComponent } from './components/playlist/playlist-delete/playlist-delete.component';
import { PlaylistDetailComponent } from './components/playlist/playlist-detail/playlist-detail.component';
import { AuthGuard } from './guards/auth.guard';

  
@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HomeComponent,
    LoginComponent,
    SongIndexComponent,
    PlaylistComponent,
    PlaylistEditComponent,
    PlaylistCollectionIndexComponent,
    PlaylistCollectionCreateComponent,
    PlaylistCollectionDetailComponent,
    PlaylistCollectionDeleteComponent,
    AdminPortalComponent,
    PlayControlsComponent,
    SongCreateComponent,
    PlaylistIndexComponent,
    PlaylistCreateComponent,
    RegistrationComponent,
    SongDetailComponent,
    SongDeleteComponent,
    SongUpdateComponent,
    PlaylistDeleteComponent,
    PlaylistDetailComponent
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
    MatOptionModule,
    MatSelectModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatProgressBarModule,
    MatDialogModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    PlaylistService,
    PlaylistCollectionService,
    PlayControlsService,
    SongService
  ],
  entryComponents: [
    SongDetailComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }