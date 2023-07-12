import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Square3dButtonComponent } from './square3d-button.component';

describe('Square3dButtonComponent', () => {
  let component: Square3dButtonComponent;
  let fixture: ComponentFixture<Square3dButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Square3dButtonComponent]
    });
    fixture = TestBed.createComponent(Square3dButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
