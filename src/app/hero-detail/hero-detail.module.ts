import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeroDetailRouting} from "./hero-detail.routing";
import { HeroDetailComponent } from './hero-detail.component';

@NgModule({
  imports: [
    CommonModule,
    HeroDetailRouting
  ],
  declarations: [HeroDetailComponent]
})
export class HeroDetailModule { }
