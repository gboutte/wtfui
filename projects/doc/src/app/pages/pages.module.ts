import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsPageComponent } from './buttons-page/buttons-page.component';
import { SwitchesPageComponent } from './switches-page/switches-page.component';
import {ComponentsExamplesModule} from "../components-examples/components-examples.module";
import {SharedDocModule} from "../shared-doc/shared-doc.module";



@NgModule({
  declarations: [
    ButtonsPageComponent,
    SwitchesPageComponent
  ],
    imports: [
        CommonModule,
        ComponentsExamplesModule,
        SharedDocModule
    ]
})
export class PagesModule { }
