import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FireLoaderExampleComponent } from './fire-loader-example.component';

describe('FireLoaderExampleComponent', () => {
  let component: FireLoaderExampleComponent;
  let fixture: ComponentFixture<FireLoaderExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FireLoaderExampleComponent]
    });
    fixture = TestBed.createComponent(FireLoaderExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
