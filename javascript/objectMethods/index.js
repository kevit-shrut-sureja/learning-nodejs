// Object Assign copys values from source objs to the target object
// Object.assign(target , values);
// const target = {
//     a : 1,
//     b : 2,
//     name : "Shrut"
// }
// const newObj = Object.assign(target, {shrut : "shrut", sureja : "sureja"}, {name : ["joy", "luffy"]})
// console.log(newObj);
// console.log(target);


// --------------------- Object.create
// Doubt ?? newObjCreate.name and newObjCreate
// const target1 = {
//     a : 1,
//     b : 2,
//     name : "Shrut"
// }
// const newObjCreate = Object.create(target1);

// console.log(newObjCreate);
// console.log(newObjCreate.name)
// newObjCreate.a = 2;
// console.log(newObjCreate)
// console.log(target1);

// --------------------- Object.defineProperties()

// this is used to define the properties for the object values
// like writable, get, set methods and more

// Doubt ?? why is the output of the object1 empty in the console log 
// const object2 = {};

// Object.defineProperties(object2, {
//   property1: {
//     value: 42,
//     writable: true,
//   },
//   property2: {
//     value : 42,
//     writable : false
//   },
// });
// object2.property1 = 21;
// object2.property2 = 21;

// console.log("object1.property1 = ", object2.property1);
// console.log("object1.property2 = ", object2.property2);
// console.log("object1 = ", JSON.stringify(object2, null, 2));


// --------------------- Object.entries

// const object1 = {
//     a: 'somestring',
//     b: 42,
// };
// console.log(Object.entries(object1))
// for (const [key, value] of Object.entries(object1)) {
//     console.log(`${key}: ${value}`);
// }
  

// -------------------- Object.freeze

// freezes an object, which then can no longer be changed

// const obj = { a: 1 }
// Object.freeze(obj)
// obj.prop = 2 // error in strict mode else undefined 
// console.log(obj.prop) // 1
// // syntax
// Object.freeze(obj)


// -------------------- Object.fromEntries

// from entries to the object conversion  
// Object.fromEntries([['a', 1], ['b', 2]]) // { a: 1, b: 2 }


// -------------------- Object.getOwnPropertyDescriptor

// Writtens for only those whose asked
// const object1 = {
//     property1: 42,
// };

// const descriptor1 = Object.getOwnPropertyDescriptor(object1, 'property1');

// console.log(descriptor1);

// -------------------- Object.getOwnPropertyescriptors 
// written the properties for all the props
// const object1 = {
//     property1: 42,
// };

// Object.defineProperties(object1, {
//     property2 : {
//         value : 45,
//         writable : false
//     }
// })

// const descriptors1 = Object.getOwnPropertyDescriptors(object1);

// console.log(descriptors1);


// ------------------- Object.getOwnPropertyNames

// const object1 = {
//     a: 1,
//     b: 2,
//     c: 3,
// };

// console.log(Object.getOwnPropertyNames(object1));


// -------------------- Obj.values 

// const object2 = {
//     a : 1,
//     b : 2,
//     name : "Shrut"
// }

// console.log(Object.values(object2))
// console.log(Object.keys(object2))


// Doubt : What are static methods and how are they assigned in the memory
// do they have the same memory for all or not
// like the Object.hasOwn(...) function and all the functions that are 
// assigned by default to a object

// let obj = {
//   a: 1,
//   b: 2,
//   getA: function() {
//     return this.a;
//   }
// };
// let func = obj.getA;
// console.log(func());

// // let obj = {
// //   a: 1,
// //   b: 2,
// //   c: 3
// // };
// let keys = Object.keys(obj);
// let values = Object.values(obj)
// console.log(keys);
// console.log(values);

// const o = new Object();
// const o1 = new Object(undefined);
// const o2 = new Object(null);
// console.log(o);
// console.log(o1);
// console.log(o2);

// const numberObj = new Number(1);
// console.log(numberObj); // "object"

// const bigintObj = Object(1n);
// console.log(bigintObj); // "object"

// const symbolObj = Object(Symbol("foo"));
// console.log( symbolObj); // "object"

// const obj = { a: 1 };
// const copy = Object.assign(obj, {});
// console.log(copy); // { a: 1 }

// const o1 = { a: 1 };
// const o2 = { b: 2 };
// const o3 = { c: 3 };

// const obj = Object.assign(ss = {} ,o1, o2, o3);
// console.log(obj); // { a: 1, b: 2, c: 3 }
// console.log(o1); // { a: 1, b: 2, c: 3 }, target object itself is changed.
// console.log(ss === obj);
// ss = 1;
// console.log(ss);
// console.log(obj);

// const obj = {
//   foo: 1,
//   get bar() {
//     return 2;
//   },
// };
// console.log(obj);
// const copy = Object.assign({}, obj);
// console.log(copy); //{ foo: 1, bar: 2 }

// const randomKeyOrder = { 100: "a", 2: "b", 7: "c" };
// console.log(Object.entries(randomKeyOrder)); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]

// // getFoo is a non-enumerable property
// const myObj = Object.create(
//   {},
//   {
//     getFoo: {
//       value() {
//         return this.foo;
//       },
//     },
//   },
// );
// myObj.boo = "bar";
// console.log(Object.entries(myObj)); // [ ['foo', 'bar'] ]

// let obj = {
//   name: 'Alice',
//   age: 30,
//   greet: function() {
//     return 'Hello, my name is ' + this.name;
//   }
// };
// const m = new Map(Object.entries(obj));
// console.log(m);
// Create an object with a value and a circular reference to itself.
// const original = { name: "MDN" };
// original.itself = original;

// // Clone it
// const clone = structuredClone(original);

// console.log(clone !== original); // the objects are not the same (not same identity)
// console.log(clone.name === "MDN"); // they do have the same values
// console.log(clone.itself === clone); // and the circular reference is preserved


// const object1 = {
//   a: 'somestring',
//   b: 42,
//   c: false,
//   d: () =>  1
// };

// console.log(Object.values(object1)[3]);
// Expected output: Array ["somestring", 42, false]

// console.log(Object.getPrototypeOf("foo"));

const obj = {
}

const b = Symbol('a');
obj[b] = "asdsadad"
obj[Symbol('a')]= "asdasd"
console.log(obj);
