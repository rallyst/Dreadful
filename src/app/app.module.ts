import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { HomeComponent } from './home/home.component';
import { SeriesComponent } from './series/series.component';
import { FooterModule } from './footer/footer.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SeriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
