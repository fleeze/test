interface Test {
  name: string,
  age: number
}




type TTest = {
  name: string,
  age?: number
}

const myCanvas = document.getElementById('canvas12')

myCanvas.getClientRects()


function loggingIdentity<Type extends any[]>(arg: Type): Type {
  console.log(arg.length); // Array has a .length, so no more error
  return arg;
}

type UppercaseKey<T> = {
  [key in keyof T as Uppercase<key & string>]: T[key]
}

type Pick2<T, key extends keyof T> = {
  [index in key as Uppercase<index & string>]: string;
};
type Pick1<T, key extends keyof T> = {
  [prop in key]: T[prop]
}
// ^?
const age :UppercaseKey<TTest> = {
  NAME: 'd',
  AGE: 4
}
type Plus1<A extends any[]> = [true, ...A];
type Add<A extends any[], B extends any[]> = [...A, ...B];
type Minus1<A extends any[]> = A extends readonly [any?, ...infer U] ? U : [...A];
type Minus2<A extends any[]> = Minus1<Minus1<A>>;
type ArrayOfSize<N extends number> = N extends N ? (number extends N ? boolean[] : _ArrayOfSize<N, []>) : never;
type _ArrayOfSize<N extends number, R extends unknown[]> = R['length'] extends N ? R : _ArrayOfSize<N, [true, ...R]>;

type _Fib<NUM extends any[]> = NUM['length'] extends 1 | 0
    ? NUM
    : Add<_Fib<Minus1<NUM>>, _Fib<Minus2<NUM>>>;

type Fib<N extends number> = _Fib<ArrayOfSize<N>>['length'];


type F1 = Fib<1>; // 1
type F2 = Fib<2>; // 1
type F3 = Fib<3>; // 2
type F4 = Fib<4>; // 3
type F5 = Fib<5>; // 5
type F6 = Fib<6>; // 8
type F7 = Fib<7>; // 13
type F8 = Fib<8>; // 21
type F9 = Fib<9>; // 34
type F20 = Fib<20>; // 6765
const num: F20 = 6765
type F30 = Fib<30>; // Error, recursion too deep
