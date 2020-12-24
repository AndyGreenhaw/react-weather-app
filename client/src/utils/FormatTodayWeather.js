import API from "./API"
import FormatDate from './FormatDay'

export default {

    // PRIMARY ELEMENTS
    getTodayWeather: function(resp) {
        const cityName = resp.data.name
        const todayDate = FormatDate.getDate()
        const iconImg = (require('../images/' + resp.data.weather[0].icon + '@2x.png'))
        
        // TEMPERATURE
        const temp = "Temperature: " + resp.data.main.temp + "°"
        const tempMax = resp.data.main.temp_max + "°"
        const tempMin = resp.data.main.temp_min + "°"

        const humid = resp.data.main.humidity + "%"
        const wind = resp.data.wind.speed + "mph"

        // LATITUDE AND LONGITUDE
        const latC = resp.data.coord.lat;
        const lonC = resp.data.coord.lon;

        const cityCoordinates = "https://api.openweathermap.org/data/2.5/uvi?lat=" + latC + "&lon=" + lonC + "&appid=e7d65f8500681df1e3559a6964e703f1"

        // API REQUEST - UV INDEX
        const newWeatherObj = API.getUV(cityCoordinates).then( resp => {
            console.log(resp)
        
            // NEW WEATHER OBJECT MODEL
            const updatedWeatherObj = {
                cityName: cityName,
                todayDate: todayDate,
                iconImg: iconImg, 
                temp: temp,
                tempMax: tempMax,
                tempMin: tempMin,
                humid: humid,
                wind: wind,
                uvIndex: resp.data.value
            }
            
            // SET STATE ON WEATHER OBJECT
            console.log(updatedWeatherObj)
            return updatedWeatherObj
            
        })

        return newWeatherObj
        
    }

}