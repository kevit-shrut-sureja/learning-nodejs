function bark(){
    console.log("asdasd")
}

bark.animal = 'dog'

console.log("--------------------");

console.log(NaN === NaN);

console.log("--------------------");

function Car(make, model){
    this.make = make;
    this.model = model
}

Car.prototype.info = function(){
    console.log(`${this.make} ${this.model}`);
}

var myCar = new Car("toyota", "canery")
delete myCar.make;
myCar.info();

console.log("------------------");

const obj = Object.create(null);

console.log("------------------");

const arr = [1,2,3,4,4,5,6,7];

console.log(arr.pop());
console.log(arr.slice(-1));

console.log("------------------");

const fruits = ["banana", "apple", "mango", "kiwi", ];

console.log(fruits.reduce((count, fruit) => count + (fruit.includes('a') ? 1 : 0), 0));
console.log(fruits.filter(fruit => fruit.includes('a')).length);

console.log("------------------");

const result = eval("10*10+5");
console.log(result);
console.log(typeof result);
