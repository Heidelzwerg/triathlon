import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartNummerDruckenComponent } from './start-nummer-drucken.component';

describe('StartNummerDruckenComponent', () => {
  let component: StartNummerDruckenComponent;
  let fixture: ComponentFixture<StartNummerDruckenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartNummerDruckenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartNummerDruckenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
