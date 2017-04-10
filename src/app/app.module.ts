import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {HeroDashboardModule} from "./hero-dashboard/hero-dashboard.module";
import {AppRouting} from "./app.routing";
import {HeroDetailModule} from "./hero-detail/hero-detail.module";
import {HeroesModule} from "./heroes/heroes.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouting,
    HeroDashboardModule,
    HeroDetailModule,
    HeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
