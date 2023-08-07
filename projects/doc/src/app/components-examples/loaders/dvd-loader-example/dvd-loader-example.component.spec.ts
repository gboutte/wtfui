import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DvdLoaderExampleComponent } from './dvd-loader-example.component';

describe('DvdLoaderExampleComponent', () => {
  let component: DvdLoaderExampleComponent;
  let fixture: ComponentFixture<DvdLoaderExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DvdLoaderExampleComponent]
    });
    fixture = TestBed.createComponent(DvdLoaderExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
