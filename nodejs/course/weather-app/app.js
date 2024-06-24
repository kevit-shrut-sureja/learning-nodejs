const forcast = require('./utils/forecast.js');
const geocode = require('./utils/geocode.js')

const location = process.argv[2];

if(location){
    console.log(location);
    geocode(location, (error, {location : cityName}) => {
        if(error){
            return console.log("Error :", error);
        }
        forcast(cityName, (error, forecastData)=>{
            if(error) return console.log("Error : ", error);
            console.log("Data : ", forecastData);
        })
    });
}
else {
    console.log("Please Enter the city name")
}