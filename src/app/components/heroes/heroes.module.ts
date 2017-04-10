import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes.component';
import {HeroesRouting} from "./heroes.routing";
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { HeroSelectedComponent } from './hero-selected/hero-selected.component';

@NgModule({
  imports: [
    CommonModule,
    HeroesRouting
  ],
  declarations: [HeroesComponent, HeroesListComponent, HeroSelectedComponent]
})
export class HeroesModule { }
