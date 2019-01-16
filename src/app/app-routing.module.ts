import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaylistIndexComponent } from './components/playlist-collection/pc-index/playlist-collection-index.component';

import { RegistrationComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component'
import { PlaylistCreateComponent } from './components/playlist-collection/pc-create/playlist-collection-create.component';
import { PlaylistDetailComponent } from './components/playlist-collection/pc-detail/pc-detail.component';

const routes: Routes = [
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },

  {path: 'playlist', children: [
    {path: 'index', component: PlaylistIndexComponent},
    {path: 'assign', component: PlaylistCreateComponent},
    {path: 'detail/:id', component: PlaylistDetailComponent} 
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
