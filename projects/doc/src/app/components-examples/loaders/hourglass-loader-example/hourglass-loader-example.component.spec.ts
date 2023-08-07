import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourglassLoaderExampleComponent } from './hourglass-loader-example.component';

describe('HourglassLoaderExampleComponent', () => {
  let component: HourglassLoaderExampleComponent;
  let fixture: ComponentFixture<HourglassLoaderExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HourglassLoaderExampleComponent]
    });
    fixture = TestBed.createComponent(HourglassLoaderExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
