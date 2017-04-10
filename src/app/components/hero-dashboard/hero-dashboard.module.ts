import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeroDashboardComponent} from "./hero-dashboard.component";
import {HeroDashboardRouting} from "./hero-dashboard.routing";
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroSelectorComponent } from './hero-selector/hero-selector.component';

@NgModule({
  imports: [
    CommonModule,
    HeroDashboardRouting
  ],
  declarations: [HeroDashboardComponent, HeroSearchComponent, HeroSelectorComponent]
})
export class HeroDashboardModule { }
