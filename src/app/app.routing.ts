import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard',  loadChildren: './hero-dashboard/hero-dashboard.module#HeroDashboardModule' },
  { path: 'detail/:id', loadChildren: './hero-detail/hero-detail.module#HeroDetailModule' },
  { path: 'heroes',     loadChildren: './heroes/heroes.module#HeroesModule' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRouting {}
