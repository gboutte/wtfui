import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FireLoaderComponent } from './fire-loader.component';

describe('FireLoaderComponent', () => {
  let component: FireLoaderComponent;
  let fixture: ComponentFixture<FireLoaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FireLoaderComponent]
    });
    fixture = TestBed.createComponent(FireLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
