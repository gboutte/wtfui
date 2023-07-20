import { NgModule } from '@angular/core';
import {ButtonsModule} from "./buttons/buttons.module";
import {SwitchesModule} from "./switches/switches.module";



@NgModule({
  declarations: [
  ],
  imports: [
    ButtonsModule,
    SwitchesModule,
  ],
  exports: [
    ButtonsModule,
    SwitchesModule,
  ]
})
export class WtfuiModule { }
