import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewGridComponent } from './view-grid.component';
import { PaginationComponent } from './pagination/pagination.component';
import { GridItemComponent } from '../grid-item/grid-item.component';



@NgModule({
  declarations: [
    ViewGridComponent,
    PaginationComponent,
    GridItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ViewGridComponent

  ]
})
export class ViewGridModule { }
