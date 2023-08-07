import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadersPageComponent } from './loaders-page.component';

describe('LoadersPageComponent', () => {
  let component: LoadersPageComponent;
  let fixture: ComponentFixture<LoadersPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadersPageComponent]
    });
    fixture = TestBed.createComponent(LoadersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
