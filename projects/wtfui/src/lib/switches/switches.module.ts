import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RockerSwitchComponent} from './rocker-switch/rocker-switch.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    RockerSwitchComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    RockerSwitchComponent
  ]
})
export class SwitchesModule {
}
