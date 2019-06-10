import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffelanmeldungComponent } from './staffelanmeldung.component';

describe('StaffelanmeldungComponent', () => {
  let component: StaffelanmeldungComponent;
  let fixture: ComponentFixture<StaffelanmeldungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffelanmeldungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffelanmeldungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
