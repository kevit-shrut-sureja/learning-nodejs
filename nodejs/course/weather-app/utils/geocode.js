const { request } = require('undici')

async function geocode(cityName, callback){
    try {
        const {
            body
        } = await request('https://api.weatherapi.com/v1/current.json', {
            query  :{
                key : '20154bff1e1d4a22885105735242106',
                q : cityName
            }
        } )
        const data = await body.json()
        if(data.error){
            callback("Unable to find the location. Try another search.", null);
        }
        else {
            callback(null, {
                location : data.location.name + ', ' + data.location.country,
                lat : data.location.lat,
                lon : data.location.lon,
                temperature : data.current.temp_c
            })
        }

    } catch (error) {
        console.log("Unable to connect to location services.");
    }
}

module.exports = geocode