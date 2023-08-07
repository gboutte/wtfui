import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoubleDotsLoaderComponent } from './double-dots-loader/double-dots-loader.component';



@NgModule({
  declarations: [
    DoubleDotsLoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DoubleDotsLoaderComponent
  ]
})
export class LoadersModule { }
