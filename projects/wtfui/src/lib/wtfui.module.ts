import { NgModule } from '@angular/core';
import {ButtonsModule} from "./buttons/buttons.module";
import {SwitchesModule} from "./switches/switches.module";
import {LoadersModule} from "./loaders/loaders.module";



@NgModule({
  declarations: [
  ],
  imports: [
    ButtonsModule,
    SwitchesModule,
    LoadersModule,
  ],
  exports: [
    ButtonsModule,
    SwitchesModule,
    LoadersModule,
  ]
})
export class WtfuiModule { }
