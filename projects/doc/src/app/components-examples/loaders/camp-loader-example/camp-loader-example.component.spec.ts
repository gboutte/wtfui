import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampLoaderExampleComponent } from './camp-loader-example.component';

describe('CampLoaderExampleComponent', () => {
  let component: CampLoaderExampleComponent;
  let fixture: ComponentFixture<CampLoaderExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CampLoaderExampleComponent]
    });
    fixture = TestBed.createComponent(CampLoaderExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
