import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrkundeDruckenComponent } from './urkunde-drucken.component';

describe('UrkundeDruckenComponent', () => {
  let component: UrkundeDruckenComponent;
  let fixture: ComponentFixture<UrkundeDruckenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrkundeDruckenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrkundeDruckenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
