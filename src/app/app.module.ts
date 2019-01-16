import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { 
  MatToolbarModule,
  MatButtonModule,
  MatTableModule,
  MatInputModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SongComponent } from './components/song/song.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { PlaylistCollectionComponent } from './components/playlist-collection/playlist-collection.component';
import { AdminPortalComponent } from './components/admin-portal/admin-portal.component';
import { PlayControlsComponent } from './components/play-controls/play-controls.component';
import { PlaylistIndexComponent } from './components/playlist/playlist-index/playlist-index.component';
import { PlaylistCreateComponent } from './components/playlist/playlist-create/playlist-create.component';
import { AuthService } from './services/auth.service';
import { PlaylistService } from './services/playlist.service';

const routes = [
  {path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'playlists', children: [
      { path: '', component: PlaylistIndexComponent },
      { path: 'create', component: PlaylistCreateComponent }
    ]
  },
  { path: '**', component: RegisterComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    SongComponent,
    PlaylistComponent,
    PlaylistCollectionComponent,
    AdminPortalComponent,
    PlayControlsComponent,
    PlaylistIndexComponent,
    PlaylistCreateComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule, 
    MatTableModule,
    MatInputModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    PlaylistService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
