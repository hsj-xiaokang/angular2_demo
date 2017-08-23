import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppHeroesComponent } from './components/app-heroes.component';
import { AppDashboardComponent } from './components/app-dashboard.component';
import { AppHeroDetailComponent } from './components/app-hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: AppDashboardComponent },
  { path: 'detail/:id', component: AppHeroDetailComponent },
  { path: 'heroes',     component: AppHeroesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
