import axios from "axios";
import { request } from "undici";

const url = 'https://api.escuelajs.co/api/v1/products'

const dataToSend =  {
    "title": "adasdasd",
    "price": 1110,
    "description": "Hellos this is a description",
    "categoryId": 10,
    "images": ["https://api.escuelajs.co/api/v1/files/9a7f.jpg"]
} 


// axios
const axiosRequest = axios(url, {
    method : "POST",
    headers : {
        "Content-Type" : "application/json"
    },
    data : dataToSend
})

// axiosRequest.then((response) => {
//     console.log(response.data)
// })

// fetch request
const fetchRequest = fetch(url, {
    method : "POST",
    headers : {
        "Content-Type" : "application/json"
    },
    body : JSON.stringify(dataToSend)
})

// fetchRequest.then((response) => response.json())
// .then(data => console.log(data))

async function undiciRequest(){
    const { statusCode, body, headers }  = await request(url, {
        method : "POST",
        headers : { 
            "Content-Type" : "application/json"
        },
        body : JSON.stringify( dataToSend)
    })
    const responsedBody = await body.json();
    console.log(responsedBody)
}

undiciRequest()