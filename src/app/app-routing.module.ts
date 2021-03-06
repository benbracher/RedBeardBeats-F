import { PrivatePlaylistIndexComponent } from './components/playlist/private-playlist-index/private-playlist-index.component';
import { PrivateSongIndexComponent } from './components/song/private-song-index/private.song.index.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaylistCollectionIndexComponent } from './components/playlist-collection/pc-index/playlist-collection-index.component';

import { AdminPortalComponent } from './components/admin-portal/admin-portal.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component'
import { RegistrationComponent } from './components/register/register.component';
import { PlaylistCollectionCreateComponent } from './components/playlist-collection/pc-create/playlist-collection-create.component';
import { PlaylistCollectionDetailComponent } from './components/playlist-collection/pc-detail/pc-detail.component';
import { PlaylistCollectionDeleteComponent } from './components/playlist-collection/pc-delete/pc-delete.component';
import { PlaylistIndexComponent } from './components/playlist/playlist-index/playlist-index.component';
import { PlaylistCreateComponent } from './components/playlist/playlist-create/playlist-create.component';
import { PlaylistEditComponent } from './components/playlist/playlist-edit/playlist-edit.component';
import { PlaylistDetailComponent } from './components/playlist/playlist-detail/playlist-detail.component';
import { PlaylistDeleteComponent } from './components/playlist/playlist-delete/playlist-delete.component';
import { SongIndexComponent } from './components/song/song-index/song.index.component';
import { SongCreateComponent } from './components/song/song-create/song.create.component';
import { SongDetailComponent } from './components/song/song-detail/song-detail.component';
import { SongUpdateComponent } from './components/song/song-update/song-update.component';
import { SongDeleteComponent } from './components/song/song-delete/song-delete.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component:HomeComponent},
  { path: 'home', component:HomeComponent},
  { path: 'admin', component: AdminPortalComponent},
  
  
  {path: 'song', canActivate: [AuthGuard], children: [
    {path: 'index', component: SongIndexComponent},
    {path: 'private-index', component: PrivateSongIndexComponent}, 
    {path: 'create', component: SongCreateComponent},
    {path: 'detail/:id', component: SongDetailComponent},
    {path: 'delete/:id', component:SongDeleteComponent},
    {path: 'edit/:id', component: SongUpdateComponent}  
  ]},
  {path: 'newplaylist', canActivate: [AuthGuard], children: [
    {path: 'index', component: PlaylistCollectionIndexComponent},
    {path: 'assign', component: PlaylistCreateComponent},
    {path: 'detail/:id', component: PlaylistDetailComponent},    
    {path: 'delete/:id', component: PlaylistDeleteComponent},
    {path: 'create', component: PlaylistCreateComponent},    
    {path: 'edit/:id', component: PlaylistEditComponent}
  ]},
  
  {path: 'playlist', canActivate: [AuthGuard], children: [
    {path: 'privateindex', component: PrivatePlaylistIndexComponent},
    {path: 'index', component: PlaylistIndexComponent},
    {path: 'assign', component: PlaylistCollectionCreateComponent},
    {path: 'detail/:id', component: PlaylistCollectionDetailComponent}, 
    {path: 'delete/:id', component: PlaylistCollectionDeleteComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
