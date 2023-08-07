import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourglassLoaderComponent } from './hourglass-loader.component';

describe('HourglassLoaderComponent', () => {
  let component: HourglassLoaderComponent;
  let fixture: ComponentFixture<HourglassLoaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HourglassLoaderComponent]
    });
    fixture = TestBed.createComponent(HourglassLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
