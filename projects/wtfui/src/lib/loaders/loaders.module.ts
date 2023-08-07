import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoubleDotsLoaderComponent } from './double-dots-loader/double-dots-loader.component';
import { DvdLoaderComponent } from './dvd-loader/dvd-loader.component';
import { CampLoaderComponent } from './camp-loader/camp-loader.component';



@NgModule({
  declarations: [
    DoubleDotsLoaderComponent,
    DvdLoaderComponent,
    CampLoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DoubleDotsLoaderComponent,
    DvdLoaderComponent,
    CampLoaderComponent
  ]
})
export class LoadersModule { }
