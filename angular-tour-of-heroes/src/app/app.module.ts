import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { AppHeroDetailComponent } from './components/app-hero-detail.component';
import { HeroService } from './server/hero.service';
import { AppHeroesComponent } from './components/app-heroes.component';
import { AppDashboardComponent } from './components/app-dashboard.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AppHeroDetailComponent,
    AppHeroesComponent,
    AppDashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    // 外面配置路由
    AppRoutingModule
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
