import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RockerSwitchExampleComponent } from './rocker-switch-example.component';

describe('RockerSwitchExampleComponent', () => {
  let component: RockerSwitchExampleComponent;
  let fixture: ComponentFixture<RockerSwitchExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RockerSwitchExampleComponent]
    });
    fixture = TestBed.createComponent(RockerSwitchExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
