import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ButtonsPageComponent} from "./pages/buttons-page/buttons-page.component";
import {SwitchesPageComponent} from "./pages/switches-page/switches-page.component";
import {LoadersPageComponent} from "./pages/loaders-page/loaders-page.component";

const routes: Routes = [

  {
    path: 'buttons',
    component: ButtonsPageComponent
  },
  {
    path:'switches',
    component:SwitchesPageComponent,
  },
  {
    path: 'loaders',
    component: LoadersPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
