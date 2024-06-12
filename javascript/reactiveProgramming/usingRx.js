// // Doubt:
// // Reactive Programming  ->  https://goodguydaniel.com/blog/reactive-programming-fundamentals#core-properties-of-observables => 
// // is this similar to webhooks
// import { Observable } from 'rxjs';

// const observable = new Observable((subscriber) => {
//   subscriber.next(1);
//   subscriber.next(2);
//   setTimeout(() => {
//     subscriber.next(3);
//     subscriber.complete() 
//   }, 1000);
//   setTimeout(() => {
//     subscriber.next(6);
//   },2000)
// })

// console.log('just before subscribe');
// observable.subscribe({
//   next(x) {
//     console.log("got the value : " + x);
//   },
//   error : (err) => console.log(err),
//   complete : () => console.log("done")
// });
// console.log("after subscription")

import { Observable } from 'rxjs';

const foo = new Observable((subscriber) => {
  console.log('Hello');
  subscriber.next(42);
});

foo.subscribe((x) => {
  console.log(x);
});
foo.subscribe((y) => {
  console.log(y);
});

console.log('before');
console.log(foo.call());
console.log('after');