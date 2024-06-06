console.log("--------------------Closure 1-----------------------");
function outerScope() {
    const outside = 'i am outside';
    console.log('outerScope ➡', outside);
    function innerScope() {
        const inside = 'i am inside';
        console.log('innerScope ➡',inside);
    }
    console.log("Line after the innerScope function declaration.")
    return innerScope
}
const inner = outerScope();
console.log("Line after the inner variable declaration.")
inner();

console.log("--------------------Closure 2-----------------------");
const counter = () => {
    let privateCounter = 0;
    const changeValue = ( val ) => {
        privateCounter += val;
    }
    return {
        increment : function(val = 1) {
            changeValue(val)
        },
        decrement : function(val = 1){
            changeValue(-1 * val);
        },
        value : () => {
            return privateCounter;
        }
    }
}
const counter1 = counter();
const counter2 = counter();

console.log(counter1.value());
counter1.decrement(3);
counter1.increment();
counter2.decrement();
console.log(counter2.value());
console.log(counter1.value());

console.log("--------------------Curring 1-----------------------");
const sum = (a,b,c) => {
    return a + b + c;
}

function curry( func ) {
    return function curried(...args) {
        if(args.length >= func.length){
            return func.apply(this, args);
        }
        else {
            return function (...args2) {
                return curried.apply(this,args.concat(args2));
            }
        }
    }
}

const curriedSum = curry(sum);
console.log("(1, 2, 3)", curriedSum( 1, 2, 3));
const thirdValue = curriedSum(1, 2)
console.log("(1, 2)", thirdValue);
const finalSum = thirdValue(3);
console.log("finalSum (1,2)(3)", finalSum)
console.log("(1, 2)(3)", curriedSum(1)(2,3));
console.log("(1)(3)(2)", curriedSum(1)(3)(2));
// console.log("(1)(3)(2)(1)", curriedSum(1)(3)(2)(1));

