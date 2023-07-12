import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Square3dButtonComponent } from './square3d-button/square3d-button.component';



@NgModule({
  declarations: [
    Square3dButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    Square3dButtonComponent
  ]
})
export class ButtonsModule { }
