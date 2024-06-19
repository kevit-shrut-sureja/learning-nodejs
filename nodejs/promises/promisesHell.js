let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
};

let isShopOpen = true;

let order = (time, work) => {
    return new Promise((resolve, reject) => {
        if(isShopOpen){
            setTimeout(() => {
                resolve(work())
            }, time);
        }
        else {
            reject(console.log("Shop is closed!"))
        }
    })
}

order(2000, () => console.log(`${stocks.Fruits[0] } is selected`))
.then(() => order(0, () => console.log("production has started")))
.then(() => order(2000, () =>  console.log("The fruit has been chopped")))
.then(() => order(1000, () => console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} Added`)))
.then(() => order(1000, () => console.log("start the machine")))
.then(() => order(2000, () => console.log(`Ice cream placed on ${stocks.holder[1]}`)))
.then(() => order(3000, () => console.log(`${stocks.toppings[0]} as toppings`)))
.then(() => order(2000, () => console.log("serve Ice cream")))
.catch(() => console.log("Reached teh catch"))
.finally(() => console.log("reached the finally"))