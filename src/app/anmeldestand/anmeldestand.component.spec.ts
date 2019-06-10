import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnmeldestandComponent } from './anmeldestand.component';

describe('AnmeldestandComponent', () => {
  let component: AnmeldestandComponent;
  let fixture: ComponentFixture<AnmeldestandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnmeldestandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnmeldestandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
