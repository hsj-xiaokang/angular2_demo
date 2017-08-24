/**
 * @author heshengjin
 * @date 2017-08-24
 */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Hero } from '../classdefind/hero';

@Injectable()
export class HeroSearchService {

  constructor(private http: Http) {}

  /**
   map方法的作用不难理解，“映射”嘛，也就是原数组被“映射”成对应新数组。下面这个例子是数值项求平方：

   var data = [1, 2, 3, 4];

   var arrayOfSquares = data.map(function (item) {
   return item * item;
   });

   console.log(arrayOfSquares); // 1, 4, 9, 16
   */

  search(term: string): Observable<Hero[]> {
    return this.http
      .get(`api/heroes_/?name=${term}`)
      .map(response => response.json().data as Hero[]);
  }
}
