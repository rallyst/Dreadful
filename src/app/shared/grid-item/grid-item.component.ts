import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.scss']
})
export class GridItemComponent implements OnInit {
  @Input() itemData: any;
  showDescription = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  overlayStyle = {
    height: '50%'
  };

  onMouseEnter() {
    this.showDescription = true;
  }

  onMouseLeave() {
    this.showDescription = false;
  }

}
