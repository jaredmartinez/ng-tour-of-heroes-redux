import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard',  loadChildren: './components/hero-dashboard/hero-dashboard.module#HeroDashboardModule' },
  { path: 'detail/:id', loadChildren: './components/hero-detail/hero-detail.module#HeroDetailModule' },
  { path: 'heroes',     loadChildren: './components/heroes/heroes.module#HeroesModule' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRouting {}
