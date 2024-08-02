// interface person {
//     name: string;
//     age: number;
//     greeting(): void;
// }

// const student: person = {
//     name: "shrut",
//     age: 1,
//     greeting() {

//     },
//     // class : "xyz"
// }

// interface User {
//     name: string;
//     id: number;
// }

// class UserAccount {
//     name: string;
//     id: number;
//     age : number;
//     constructor(name: string, id: number) {
//         this.name = name;
//         this.id = id;
//         this.age = 12;
//     }
// }

// const user: User = new UserAccount("Murphy", 1);

/**
 *  adds 2 numbers
 * @param {number}a 
 * @param b 
 * @returns 
 */
function sum(a : number,b : number){
    return a + b
}

enum computedEnum { 
    a = 10,
    str = "str".length, // computed enum 
    add = 300 + 100, //computer enum 
    b
} 
                    console.log(computedEnum.a);
                    console.log(computedEnum.str);
console.log(computedEnum.add);
console.log(computedEnum.b);


sum(1, 2)