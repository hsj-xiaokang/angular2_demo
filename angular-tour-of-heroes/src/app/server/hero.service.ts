/**
 * @author heshengjin
 * @date 2017-08-24
 */
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
  private headers = new Headers({'Content-Type': 'application/json'});

  update(hero: Hero): Promise<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }
  create(name: string): Promise<Hero> {
    return this.http
      .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Hero)
      .catch(this.handleError);
  }
  delete(id: number): Promise<void> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
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
  // 写死返回，不是mock
  // getHero(id: number): Promise<Hero> {
  //   return this.getHeroes()
  //     .then(heroes => heroes.find(hero => hero.id === id));
  // }
  getHero(id: number): Promise<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Hero)
      .catch(this.handleError);
  }
}
