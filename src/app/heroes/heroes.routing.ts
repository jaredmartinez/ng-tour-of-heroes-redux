import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {HeroesComponent} from "./heroes.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '',  component: HeroesComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class HeroesRouting {
}
