import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WtfuiComponent } from './wtfui.component';

describe('WtfuiComponent', () => {
  let component: WtfuiComponent;
  let fixture: ComponentFixture<WtfuiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WtfuiComponent]
    });
    fixture = TestBed.createComponent(WtfuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
