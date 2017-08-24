/**
 * @author heshengjin
 * @date 2017-08-24
 */
import { Component, OnInit } from '@angular/core';
import { Hero } from '../classdefind/hero';
import { HeroService } from '../server/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './app-dashboard.component.html',
  styleUrls: ['./app-dashboard.component.css']
})
export class AppDashboardComponent implements OnInit {
  constructor(private heroService: HeroService) { }
  heroes: Hero[];
  getHeroes(): void {
    // this.heroService.getHeroes().then(allheroes => this.heroes = allheroes);
    this.heroService.getHeroesSlowly().then(_4heroes => this.heroes = _4heroes.slice(1, 5));
  }
  ngOnInit(): void {
    this.getHeroes();
  }
}
