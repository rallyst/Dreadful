import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { LogoComponent } from './components/logo/logo.component';
import { SubscribeButtonComponent } from './components/subscribe-button/subscribe-button.component';
import { LogButtonComponent } from './components/log-button/log-button.component';
import { FilterButtonComponent } from './components/filter-button/filter-button.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LogoComponent,
    SubscribeButtonComponent,
    LogButtonComponent,
    FilterButtonComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }