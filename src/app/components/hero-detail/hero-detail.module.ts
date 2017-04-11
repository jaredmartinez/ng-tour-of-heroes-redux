import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeroDetailRouting} from "./hero-detail.routing";
import { HeroDetailComponent } from './hero-detail.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeroDetailRouting
  ],
  declarations: [HeroDetailComponent]
})
export class HeroDetailModule { }
