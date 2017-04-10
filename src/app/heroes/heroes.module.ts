import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes.component';
import {HeroesRouting} from "./heroes.routing";

@NgModule({
  imports: [
    CommonModule,
    HeroesRouting
  ],
  declarations: [HeroesComponent]
})
export class HeroesModule { }
