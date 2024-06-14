// GET Products
import { request } from 'undici'
import axios from 'axios'
// const url = 'https://api.escuelajs.co/api/v1/products?limit=5&offset=5'
const url = 'https://api.escuelajs.co/api/v1/products'

const axiosResult = axios(url, {
    method: "GET",
    params : {
        limit : 5,
        offset : 5
    }
})

// axiosResult.then((response) => console.log(response.config, response.data))


const fetchResult = fetch(url + '?' + new URLSearchParams({
    limit : 5,
    offset : 5
}), {
    method : "GET",
})

// fetchResult
// .then((response) => response.json()) // Doubt : if comment this line we get the readable stream what is that ??
// .then((data) => console.log(data));

async function undiciRequest (){
    const {statusCode, body, headers, context} = await request(url, {
        method : "GET",
        query : {
            limit : 5, 
            offset : 5
        }
    })
    const decodedJson = await body.json();
    console.log(decodedJson, statusCode, headers)
    console.log(context)
}
undiciRequest();