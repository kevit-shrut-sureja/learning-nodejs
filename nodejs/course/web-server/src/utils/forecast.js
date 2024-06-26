import { request } from 'undici'

async function forecast(lat, lon, callback){
    try {
        const {
            body
        } = await request('https://api.weatherapi.com/v1/current.json', {
            query  :{
                key : "20154bff1e1d4a22885105735242106",
                q : lat +","+ lon
            }
        } )
        const data = await body.json()
        console.log(data);
        if(data.error){
            callback("Unable to find the location from lat and lon. Try another search.", undefined);
        }
        else {
            callback(undefined, {
                forecast : data.current.condition.text,
            })
        }

    } catch (error) {
        console.log("Unable to connect to location services.");
    }
}

export { forecast }