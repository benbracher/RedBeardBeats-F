import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayControlsComponent } from './play-controls.component';

describe('PlayControlsComponent', () => {
  let component: PlayControlsComponent;
  let fixture: ComponentFixture<PlayControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
