import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AmongUsButtonExampleComponent} from './buttons/among-us-button-example/among-us-button-example.component';
import {ButtonsModule} from "../../../../wtfui/src/lib/buttons/buttons.module";
import {Square3dButtonExampleComponent} from './buttons/square3d-button-example/square3d-button-example.component';
import {RockerSwitchExampleComponent} from './switches/rocker-switch-example/rocker-switch-example.component';
import {SwitchesModule} from "../../../../wtfui/src/lib/switches/switches.module";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DoubleDotsLoaderExampleComponent } from './loaders/double-dots-loader-example/double-dots-loader-example.component';
import {LoadersModule} from "../../../../wtfui/src/lib/loaders/loaders.module";
import {WtfuiModule} from "../../../../wtfui/src/lib/wtfui.module";
import { DvdLoaderExampleComponent } from './loaders/dvd-loader-example/dvd-loader-example.component';


@NgModule({
  declarations: [
    AmongUsButtonExampleComponent,
    Square3dButtonExampleComponent,
    RockerSwitchExampleComponent,
    DoubleDotsLoaderExampleComponent,
    DvdLoaderExampleComponent,
  ],
  exports: [
    AmongUsButtonExampleComponent,
    Square3dButtonExampleComponent,
    RockerSwitchExampleComponent,
    DoubleDotsLoaderExampleComponent,
    DvdLoaderExampleComponent,
  ],
  imports: [
    CommonModule,
    WtfuiModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class ComponentsExamplesModule {
}
