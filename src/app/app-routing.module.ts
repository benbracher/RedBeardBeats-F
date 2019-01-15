import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaylistIndexComponent } from './components/playlist-collection/pc-index/playlist-collection-index.component';

const routes: Routes = [
  {path: 'playlist/index', component: PlaylistIndexComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
