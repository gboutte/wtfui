import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotatingCubeLoaderComponent } from './rotating-cube-loader.component';

describe('RotatingCubeLoaderComponent', () => {
  let component: RotatingCubeLoaderComponent;
  let fixture: ComponentFixture<RotatingCubeLoaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RotatingCubeLoaderComponent]
    });
    fixture = TestBed.createComponent(RotatingCubeLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
