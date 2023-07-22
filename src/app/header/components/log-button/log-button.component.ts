import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-log-button',
  templateUrl: './log-button.component.html',
  styleUrls: ['./log-button.component.scss']
})
export class LogButtonComponent implements OnInit {
  @Input() isLoggedIn: boolean;
  @Output() loginLogoutClicked = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.loginLogoutClicked.emit();
  }
}
