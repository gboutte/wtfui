import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleDotsLoaderComponent } from './double-dots-loader.component';

describe('DoubleDotsLoaderComponent', () => {
  let component: DoubleDotsLoaderComponent;
  let fixture: ComponentFixture<DoubleDotsLoaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoubleDotsLoaderComponent]
    });
    fixture = TestBed.createComponent(DoubleDotsLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
