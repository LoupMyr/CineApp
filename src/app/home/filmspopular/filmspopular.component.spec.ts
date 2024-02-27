import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmspopularComponent } from './filmspopular.component';

describe('FilmspopularComponent', () => {
  let component: FilmspopularComponent;
  let fixture: ComponentFixture<FilmspopularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilmspopularComponent]
    });
    fixture = TestBed.createComponent(FilmspopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
