const myDate = new Date();
let object = myDate;
do {
    // Doubt : why does this not print the properties it only does in the web console  
  object = Object.getPrototypeOf(object);
  console.log(object);
} while (object);
