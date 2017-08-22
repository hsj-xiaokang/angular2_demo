import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
  title = 'Tour of Heroes';
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
}
// typescript
export class Hero {
  /**
   手动指定 变量的类型，这个是给typescript编译器用的，用来限制变量类型。
   一般来说，能够直接被推导的变量不用指明类型。
   比如
   let a = 1; // a肯定是number
   let b = 'x'; // b肯定是string

   class A {}
   let c = new A(); // c肯定是A或者A的子类
   */
  id: number;
  name: string;
}
