import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesComponent } from './series.component';
import { ViewGridModule } from '../shared/view-grid/view-grid.module';



@NgModule({
  declarations: [
    SeriesComponent
  ],
  imports: [
    CommonModule,
    ViewGridModule
  ],
  exports: [
    SeriesComponent
  ]
})
export class SeriesModule { }
