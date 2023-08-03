import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmongUsButtonExampleComponent } from './buttons/among-us-button-example/among-us-button-example.component';



@NgModule({
    declarations: [
        AmongUsButtonExampleComponent
    ],
    exports: [
        AmongUsButtonExampleComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ComponentsExamplesModule { }
