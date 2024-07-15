const a = 5
const b = a++ + ++a;
console.log(b);

console.log("-------------------------------");

console.log("start");

async function xyz(){
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("Inside the function");
}

xyz();

console.log("end");