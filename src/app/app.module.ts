import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {HeroDashboardModule} from "./components/hero-dashboard/hero-dashboard.module";
import {AppRouting} from "./app.routing";
import {HeroDetailModule} from "./components/hero-detail/hero-detail.module";
import {HeroesModule} from "./components/heroes/heroes.module";
import { InMemoryDataService }  from './in-memory-data.service';
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {CoreModule} from "./core/core.module";
import {reducer} from "./app.reducer";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {HeroEffects} from "./effects/hero.effects";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore(reducer),
    EffectsModule.run(HeroEffects),
    CoreModule,
    AppRouting,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    HeroDashboardModule,
    HeroDetailModule,
    HeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
