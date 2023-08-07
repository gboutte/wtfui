import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampLoaderComponent } from './camp-loader.component';

describe('CampLoaderComponent', () => {
  let component: CampLoaderComponent;
  let fixture: ComponentFixture<CampLoaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CampLoaderComponent]
    });
    fixture = TestBed.createComponent(CampLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
