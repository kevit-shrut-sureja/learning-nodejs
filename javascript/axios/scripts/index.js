// Scripts for making request to the server 1 
// import axios from "axios";

// import { instance  } from "./instance.js";
// async function dataFetching(){
//     const data = await instance.get('/data') 
//     console.log("-------------headers ",data.headers);
//     console.log("-------------request ",data.request);
//     console.log("-------------status",data.status);
//     console.log("-------------statusText",data.statusText);
//     console.log("-------------data",data.data);
// }

// dataFetching();

async function logMovies() {
    const response = await fetch("https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch");
    // const movies = await response.json();
    console.log(response.url);
}

logMovies()