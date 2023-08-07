import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleDotsLoaderExampleComponent } from './double-dots-loader-example.component';

describe('DoubleDotsLoaderExampleComponent', () => {
  let component: DoubleDotsLoaderExampleComponent;
  let fixture: ComponentFixture<DoubleDotsLoaderExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoubleDotsLoaderExampleComponent]
    });
    fixture = TestBed.createComponent(DoubleDotsLoaderExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
