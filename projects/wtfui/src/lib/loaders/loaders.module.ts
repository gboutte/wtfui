import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoubleDotsLoaderComponent } from './double-dots-loader/double-dots-loader.component';
import { DvdLoaderComponent } from './dvd-loader/dvd-loader.component';
import { CampLoaderComponent } from './camp-loader/camp-loader.component';
import { HourglassLoaderComponent } from './hourglass-loader/hourglass-loader.component';
import { FireLoaderComponent } from './fire-loader/fire-loader.component';
import { RotatingCubeLoaderComponent } from './rotating-cube-loader/rotating-cube-loader.component';



@NgModule({
  declarations: [
    DoubleDotsLoaderComponent,
    DvdLoaderComponent,
    CampLoaderComponent,
    HourglassLoaderComponent,
    FireLoaderComponent,
    RotatingCubeLoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DoubleDotsLoaderComponent,
    DvdLoaderComponent,
    CampLoaderComponent,
    HourglassLoaderComponent,
    FireLoaderComponent,
    RotatingCubeLoaderComponent,
  ]
})
export class LoadersModule { }
