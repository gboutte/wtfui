import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsPageComponent } from './buttons-page/buttons-page.component';
import { SwitchesPageComponent } from './switches-page/switches-page.component';
import {ComponentsExamplesModule} from "../components-examples/components-examples.module";
import {SharedDocModule} from "../shared-doc/shared-doc.module";
import { LoadersPageComponent } from './loaders-page/loaders-page.component';



@NgModule({
  declarations: [
    ButtonsPageComponent,
    SwitchesPageComponent,
    LoadersPageComponent
  ],
    imports: [
        CommonModule,
        ComponentsExamplesModule,
        SharedDocModule
    ]
})
export class PagesModule { }
