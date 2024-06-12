
// "use strict"
console.log(global)
function logThisInsideLogThis() {
    console.log(Object.is(globalThis, global));
}

function logThis() {
    logThisInsideLogThis();
}

logThis()
// // this shows the object global so what is the scope of that !! 

// const logThis = () => { 
//     function logThisInsideLogThis (){ console.log(this);}
//     logThisInsideLogThis();
// }
// logThis ();

// const person = {
//     firstName: "John",
//     lastName : "Doe",
//     id       : 5566,
//     getThis : function() {
//       return this.id;
//     }
// };

// const person1 = {
//     firstName: "John",
//     lastName : "Doe",
//     id       : 5566,
//     getThis : () =>  this.id
// };

// console.log('this in object method', person1.getThis());       
// console.log('this in object method', person.getThis());       



// function greet() {
//     console.log(this.animal, "typically sleep between", this.sleepDuration);
// }

// const obj = {
//     animal: "cats",
//     sleepDuration: "12 and 16 hours",
// };
// // Doubt with the syntax of the call, apply, bind mehtods
// // https://www.freecodecamp.org/news/the-this-keyword-in-javascript/
// greet.call(obj); // cats typically sleep between 12 and 16 hours
// console.log(obj)