import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Square3dButtonComponent } from './square3d-button/square3d-button.component';
import { AmongUsButtonComponent } from './among-us-button/among-us-button.component';



@NgModule({
  declarations: [
    Square3dButtonComponent,
    AmongUsButtonComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    Square3dButtonComponent,
    AmongUsButtonComponent,
  ]
})
export class ButtonsModule { }
