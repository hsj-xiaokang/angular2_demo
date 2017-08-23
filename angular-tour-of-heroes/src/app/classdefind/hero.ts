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
