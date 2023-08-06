import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-view-grid',
  templateUrl: './view-grid.component.html',
  styleUrls: ['./view-grid.component.scss']
})
export class ViewGridComponent implements OnInit {
  @Input() pagedItems: any[];
  @Input() itemsPerPage: number;

  currentPage = 1;

  get totalPages(): number {
    return Math.ceil(this.pagedItems.length / this.itemsPerPage);
  }

  onPageChange(page: number): void {
    this.currentPage = page;
  }
  constructor() { }

  ngOnInit(): void {
    
  }

}
