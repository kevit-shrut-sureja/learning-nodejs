import express from "express";
import path from 'path'
import hbs from 'hbs';
import { geocode } from './utils/geocode.js'
import { forecast } from './utils/forecast.js'

const app = express();
const PORT = process.env.PORT || 3000
//Define Paths for the express configs 
const __dirname = import.meta.dirname

const templatesPath = path.join(__dirname, '../templates/views')
const publicDirPath = path.join(__dirname,'../public'); 
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlers engine and views location
app.set('view engine', 'hbs');
app.set('views', templatesPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Shrut Sureja'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title : "About", 
        name : "Shrut Sureja"
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text.',
        title: 'Help',
        name: 'Shrut Sureja'
    })
})

app.get('/weather', (req, res)=>{
    if(!req.query.city){
        return res.send({
            error : "Please provide the city name"
        })
    }
    geocode(req.query.city, (geoError, {location, lat, lon} = {}) => {
        if(geoError){
            return res.send({error: geoError});
        }

        forecast(lat, lon, (forecastError, { forecast } = { } ) => {
            if(forecastError){
                return res.send({ error: forecastError });
            }

            res.send({
                forecast,
                location,
                city : req.query.city
            })
        })
    })
})

app.use('/help/*',(req, res, next) => {
    res.render('404', {
      title : "404",
      errorMessage : "Help page not found", 
      name : "Shrut Sureja"
    })
})

app.use((req, res, next) => {
  res.render('404', {
    title : "404",
    errorMessage : " Page not found", 
    name : "Shrut Sureja"
  })
})

app.listen(PORT, () => {
    console.log("Server is listining in the post"+ PORT + " : " + new Date().toTimeString())
}); 