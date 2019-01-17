import { SongCreateComponent } from './components/song-create/song.create.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaylistCollectionIndexComponent } from './components/playlist-collection/pc-index/playlist-collection-index.component';

import { RegistrationComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component'
import { PlaylistCollectionCreateComponent } from './components/playlist-collection/pc-create/playlist-collection-create.component';
import { PlaylistCollectionDetailComponent } from './components/playlist-collection/pc-detail/pc-detail.component';
import { PlaylistCollectionDeleteComponent } from './components/playlist-collection/pc-delete/pc-delete.component';
import { PlaylistIndexComponent } from './components/playlist/playlist-index/playlist-index.component';
import { PlaylistCreateComponent } from './components/playlist/playlist-create/playlist-create.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  {path: 'song/create', component: SongCreateComponent}
  { path: 'home', component:HomeComponent},

  {path: 'newplaylist', children: [
    {path: 'index', component: PlaylistIndexComponent},
    {path: 'assign', component: PlaylistCreateComponent},
    // {path: 'detail/:id', component: PlaylistDetailComponent},
    {path: 'create', component: PlaylistCreateComponent},    
  ]},

  {path: 'playlist', children: [
    {path: 'index', component: PlaylistCollectionIndexComponent},
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
