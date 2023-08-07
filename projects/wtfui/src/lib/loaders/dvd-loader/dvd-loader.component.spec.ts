import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DvdLoaderComponent } from './dvd-loader.component';

describe('DvdLoaderComponent', () => {
  let component: DvdLoaderComponent;
  let fixture: ComponentFixture<DvdLoaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DvdLoaderComponent]
    });
    fixture = TestBed.createComponent(DvdLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
