
// const username = "Shrut"
// const userAge = 21;

// const user = {
//     username,
//     age : userAge,
//     location : 'Rajkot'
// }

// // object destructuring

const product = {
    label : "Red Notebook",
    price : 3,
    stock : 200,
    salePrice : undefined,
    rating : 3.2
}

// // const label = product.label;
// // const price = product.price;

// const {label: productLabel, price, rating = 4} = product;
// // console.log(label);
// console.log(productLabel);
// console.log(price);
// console.log(rating);


const transaction = (type, {label, stock = 0} = {} ) => {
    console.log(type,label,stock);
}

transaction("order", undefined)
transaction("order", null) // this will give error
transaction("order", product)
