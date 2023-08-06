import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  isHomePage = false;
  isFilterVisible = false;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isHomePage = event.url === '/';
      }
    });
  }

  onLoginLogoutClicked() {
    this.isLoggedIn = !this.isLoggedIn;
  }

  onFilterButtonClick() {
    this.isFilterVisible = !this.isFilterVisible;
  }

}
