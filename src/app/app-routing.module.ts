import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaylistIndexComponent } from './components/playlist-collection/pc-index/playlist-collection-index.component';

import { RegistrationComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component'

const routes: Routes = [
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  {path: 'playlist/index', component: PlaylistIndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
