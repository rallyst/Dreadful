import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {
  data: any;
  seriesArray: [] = [];
  pagedItems: any[] = [];
  itemsPerPage = 10;
  p: number = 1;
  pages: number[] = []
  currentPage = 1;

  constructor(
    private dataService: DataService
    ) { }

  ngOnInit(): void {
    this.getDataFromApi();
    // console.log('XXX: ', this.seriesArray)
    // this.pagedItems = this.seriesArray.slice(0, this.itemsPerPage);
    // console.log('XXX: ', this.pagedItems)
  }

  getDataFromApi() {
    this.dataService.getData().subscribe(
      (response) => {
        this.data = response;
        this.getSeries()
        this.pages = this.getPages()
        this.getDataPerPage()
        console.log('pagedItems: ', this.pagedItems)
      },
      (error) => {
        console.error('Error fetching data: ', error);
      }
    );
  }

  getSeries() {
    this.seriesArray = this.data.entries.filter((item) => item.programType === 'series');
    console.log('this.seriesArray: ', this.seriesArray)
  }

  getPages() {
    return Array(Math.ceil(this.seriesArray.length / this.itemsPerPage)).fill(0).map((_, i) => i + 1);
  }

  getDataPerPage() {
    this.pagedItems = this.seriesArray.slice(0, this.itemsPerPage);
  }

  onPageChange(page: number): void {
    this.currentPage = page;
  }
}
