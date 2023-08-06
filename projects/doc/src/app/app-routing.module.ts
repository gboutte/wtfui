import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ButtonsPageComponent} from "./pages/buttons-page/buttons-page.component";
import {SwitchesPageComponent} from "./pages/switches-page/switches-page.component";

const routes: Routes = [

  {
    path: 'buttons',
    component: ButtonsPageComponent
  },
  {
    path:'switches',
    component:SwitchesPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
