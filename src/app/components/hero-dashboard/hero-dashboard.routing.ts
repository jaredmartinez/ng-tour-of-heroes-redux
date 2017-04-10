import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {HeroDashboardComponent} from "./hero-dashboard.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '',  component: HeroDashboardComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class HeroDashboardRouting {
}
