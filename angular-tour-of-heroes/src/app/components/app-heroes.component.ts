/**
 * @author heshengjin
 * @date 2017-08-24
 */
import { Component, OnInit } from '@angular/core';
import { Hero } from '../classdefind/hero';
import { HeroService } from '../server/hero.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './app-heroes.component.html',
  styleUrls: ['./app-heroes.component.css']
})
export class AppHeroesComponent implements OnInit {
  constructor(private heroService: HeroService,
              private router: Router
  ) { }
  /**

   作者：zidian257
   链接：https://www.zhihu.com/question/52176742/answer/136921894
   来源：知乎
   著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

   class Foo{

  //es7对于实例属性的提案，此属性可以在实例中访问到
  myProp = 'instantiation'
  father = 'me'

  //es7对于类的静态属性的提案，同样Babel支持,继承的类上面可用，实例不可用
  static myStatic = 'static'

  //es6属性实例访问得到
  constructor(){
    //静态属性用的时候要这样用
    this.staticProp = Foo.staticProp

    //其实你这么表示实例属性也行。。
    this.papa = 'me'
  }

  //es6支持的类的静态方法
  static myStaticMethod(){
    return 'static method'
  }

 }

   //es6支持的类的静态属性
   Foo.myStaticProp2 = 'Im also static property of Foo'

   var foo = new Foo()

   Foo.myStatic //static
   foo.father //me
   foo.papa //me
   foo.myStaticMethod() //毫无疑问找不着
   Foo.myStaticMethod() //static method
   */
  // title = 'Tour of Heroes';

  heroes: Hero[];

  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  getHeroes(): void {
    // this.heroService.getHeroes().then(allheroes => this.heroes = allheroes);
    this.heroService.getHeroesSlowly().then(allheroes => this.heroes = allheroes);
  }
  ngOnInit(): void {
    this.getHeroes();
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }
  delete(hero: Hero): void {
    this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      });
  }
}

