import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeroDashboardComponent} from "./hero-dashboard.component";
import {HeroDashboardRouting} from "./hero-dashboard.routing";

@NgModule({
  imports: [
    CommonModule,
    HeroDashboardRouting
  ],
  declarations: [HeroDashboardComponent]
})
export class HeroDashboardModule { }
