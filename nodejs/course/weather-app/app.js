const geocode = require('./utils/geocode.js')
geocode("Rajkot", (error, data) => {
    console.log("Error :", error);
    console.log("Data :", data);
})