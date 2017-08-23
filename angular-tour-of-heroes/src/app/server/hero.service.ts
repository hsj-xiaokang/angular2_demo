import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Hero } from '../classdefind/hero';
// 写死返回，不是mock
import { HEROES } from '../mock/mock-heroes';

@Injectable()
export class HeroService {
  private heroesUrl = 'api/heroes_';  // URL to web api

  constructor(private http: Http) { }

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(response => response.json().data as Hero[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  // 写死返回，不是mock
  // getHeroes(): Promise<Hero[]> {
  //   return Promise.resolve(HEROES);
  // }
  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // 箭头函数this共享在这个父亲方法里面
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getHeroes()), 1000);
    });
  }
  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id));
  }
}
