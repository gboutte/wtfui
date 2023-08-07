import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoubleDotsLoaderComponent } from './double-dots-loader/double-dots-loader.component';
import { DvdLoaderComponent } from './dvd-loader/dvd-loader.component';



@NgModule({
  declarations: [
    DoubleDotsLoaderComponent,
    DvdLoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DoubleDotsLoaderComponent,
    DvdLoaderComponent
  ]
})
export class LoadersModule { }
