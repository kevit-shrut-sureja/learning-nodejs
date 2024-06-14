console.log(a);
a = 5;
console.log(a);
var a = 7;

console.log('Hello => number 1');

setTimeout(() => {
    console.log('The timeout running last => number 4');
}, 0);
    
setImmediate(() => {
    console.log('Running before the timeout => number 3');
});

process.nextTick(() => {
  console.log('Running at next tick => number 2');
});
