import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Hero } from '../classdefind/hero';
import { HeroService } from '../server/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './app-hero-detail.component.html',
  styleUrls: ['./app-hero-detail.component.css']
})
export class AppHeroDetailComponent implements OnInit {
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  @Input() hero: Hero;
  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
      .subscribe(ahero => this.hero = ahero);
  }
  goBack(): void {
    this.location.back();
  }
}