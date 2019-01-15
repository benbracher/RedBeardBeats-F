import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistCollectionComponent } from './playlist-collection.component';

describe('PlaylistCollectionComponent', () => {
  let component: PlaylistCollectionComponent;
  let fixture: ComponentFixture<PlaylistCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
