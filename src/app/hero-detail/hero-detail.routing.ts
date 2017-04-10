import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {HeroDetailComponent} from "./hero-detail.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'details/:id',  component: HeroDetailComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})

export class HeroDetailRouting {
}
