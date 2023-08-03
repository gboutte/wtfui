import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Square3dButtonExampleComponent } from './square3d-button-example.component';

describe('Square3dButtonExampleComponent', () => {
  let component: Square3dButtonExampleComponent;
  let fixture: ComponentFixture<Square3dButtonExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Square3dButtonExampleComponent]
    });
    fixture = TestBed.createComponent(Square3dButtonExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
