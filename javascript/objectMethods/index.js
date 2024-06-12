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
const object2 = {};

Object.defineProperties(object2, {
  property1: {
    value: 42,
    writable: true,
  },
  property2: {
    value : 42,
    writable : false
  },
});
object2.property1 = 21;
object2.property2 = 21;

console.log("object1.property1 = ", object2.property1);
console.log("object1.property2 = ", object2.property2);
console.log("object1 = ", JSON.stringify(object2, null, 2));


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