import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
// 之后使用服务端的数据就可以去除了mock数据
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './mock/in-memory-data.service';

import { AppComponent } from './app.component';
import { AppHeroDetailComponent } from './components/app-hero-detail.component';

import { HeroService } from './server/hero.service';
import { HeroSearchService } from './server/hero-search.service';

import { AppHeroesComponent } from './components/app-heroes.component';
import { AppDashboardComponent } from './components/app-dashboard.component';
import { AppHeroSearchComponent} from './components/app-hero-search.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AppHeroDetailComponent,
    AppHeroesComponent,
    AppDashboardComponent,
    AppHeroSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    HttpModule,
    // 之后使用服务端的数据就可以去除了mock数据
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    // 外面配置路由
    AppRoutingModule
  ],
  providers: [
    HeroService,
    HeroSearchService
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
