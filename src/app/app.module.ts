import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SongComponent } from './components/song/song.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { PlaylistIndexComponent } from './components/playlist-collection/pc-index/playlist-collection-index.component';
import { AdminPortalComponent } from './components/admin-portal/admin-portal.component';
import { PlayControlsComponent } from './components/play-controls/play-controls.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatSidenavModule,
  MatIconModule,
  MatTableModule,
  MatButtonModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatInputModule,
  MatListModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { PlaylistCollectionService } from './services/playlist-collection.service';

const routes = [
  { path: 'sidenav', component: SideNavComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    SongComponent,
    PlaylistComponent,
    PlaylistIndexComponent,
    AdminPortalComponent,
    PlayControlsComponent,
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
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PlaylistCollectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
