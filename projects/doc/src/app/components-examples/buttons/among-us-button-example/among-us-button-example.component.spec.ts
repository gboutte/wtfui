import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmongUsButtonExampleComponent } from './among-us-button-example.component';

describe('AmongUsButtonExampleComponent', () => {
  let component: AmongUsButtonExampleComponent;
  let fixture: ComponentFixture<AmongUsButtonExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AmongUsButtonExampleComponent]
    });
    fixture = TestBed.createComponent(AmongUsButtonExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
