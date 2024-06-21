// const geocode = (address, callback) => {
//     setTimeout(()=> {
//         const data = {
//             lat : 0,
//             log : 0
//         }
//         callback(data)
//     }, 2000);
// }

// const data = geocode("rajkot", (data) => console.log(data));

function add(a,b,callback){
    callback(a+b);
}

add(1,3,(sum) => console.log(sum))