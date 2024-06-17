// console.log(1);
// process.nextTick(() => console.log(2));
// console.log(3);

process.nextTick(() => console.log(2));
Promise.resolve().then(() => console.log(1));
// output is 1, 2

// Doubt : video output is 2 1 
// https://youtu.be/M3sbOSJvhxg?si=GJOcSEDUnxmPPxVD&t=423