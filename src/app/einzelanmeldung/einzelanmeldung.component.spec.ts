import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EinzelanmeldungComponent } from './einzelanmeldung.component';

describe('EinzelanmeldungComponent', () => {
  let component: EinzelanmeldungComponent;
  let fixture: ComponentFixture<EinzelanmeldungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EinzelanmeldungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EinzelanmeldungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
