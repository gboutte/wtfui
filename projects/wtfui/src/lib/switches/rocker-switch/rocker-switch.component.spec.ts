import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RockerSwitchComponent } from './rocker-switch.component';

describe('RockerSwitchComponent', () => {
  let component: RockerSwitchComponent;
  let fixture: ComponentFixture<RockerSwitchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RockerSwitchComponent]
    });
    fixture = TestBed.createComponent(RockerSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
