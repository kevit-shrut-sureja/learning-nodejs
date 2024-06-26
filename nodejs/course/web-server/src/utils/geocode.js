import { request } from 'undici'

async function geocode(cityName, callback){
    try {
        const {
            statusCode,
            body
        } = await request('https://api.weatherapi.com/v1/current.json', {
            query  :{
                key : process.env.API_KEY,
                q : cityName
            }
        } )
        const data = await body.json();
        console.log(data);
        if(data.error){
            callback("Unable to find the location. Try another search.", undefined);
        }
        else {
            callback(undefined, {
                location : data.location.name + ', ' + data.location.country,
                lat : data.location.lat,
                lon : data.location.lon,
            })
        }

    } catch (error) {
        console.log(error);
        console.log("Unable to connect to location services.");
    }
}

export { geocode }