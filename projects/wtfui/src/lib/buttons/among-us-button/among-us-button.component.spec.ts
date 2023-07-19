import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmongUsButtonComponent } from './among-us-button.component';

describe('AmoungUsButtonComponent', () => {
  let component: AmongUsButtonComponent;
  let fixture: ComponentFixture<AmongUsButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AmongUsButtonComponent]
    });
    fixture = TestBed.createComponent(AmongUsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
