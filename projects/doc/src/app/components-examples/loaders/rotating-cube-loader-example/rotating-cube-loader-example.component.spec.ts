import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotatingCubeLoaderExampleComponent } from './rotating-cube-loader-example.component';

describe('RotatingCubeLoaderExampleComponent', () => {
  let component: RotatingCubeLoaderExampleComponent;
  let fixture: ComponentFixture<RotatingCubeLoaderExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RotatingCubeLoaderExampleComponent]
    });
    fixture = TestBed.createComponent(RotatingCubeLoaderExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
