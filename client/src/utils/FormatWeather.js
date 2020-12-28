import API from "./API"
import FormatDate from './FormatDate'

export default {

    // PRIMARY ELEMENTS
    getTodayWeather: async function(resp) {
        console.log("PRIMARY WEATHER DATA:")
        console.log(resp)
        // const cityName = resp.data.name
        const todayDate = FormatDate.getDate()
        const iconImg = (require('../images/' + resp.data.weather[0].icon + '@2x.png'))

        // WEATHER DATA
        const temp = resp.data.main.temp
        const tempMax = resp.data.main.temp_max
        const tempMin = resp.data.main.temp_min
        const humid = resp.data.main.humidity
        const windSpeed = resp.data.wind.speed

        // UV LOCATION DATA
        const latC = resp.data.coord.lat;
        const lonC = resp.data.coord.lon;
        const coordinatesOpenWeatherAPI = "https://api.openweathermap.org/data/2.5/uvi?lat=" + latC + "&lon=" + lonC + "&appid=e7d65f8500681df1e3559a6964e703f1"
        
        // WEATHER LABELS
        const tempLabel = "Temperature: " + temp + "°"
        const tempMaxLabel = "High: " + tempMax + "°"
        const tempMinLabel = "Low: " + tempMin + "°"

        const humidLabel = "Humidity: " + humid + "%"
        const windLabel = "Wind Speed: " + windSpeed + "mph"

        // AJAX REQUEST FOR UVI
        const newWeatherObj = API.getUV(coordinatesOpenWeatherAPI).then( resp => {
        console.log("UV INDEX DATA:")
        console.log(resp)

            // UVI NUMBER
            const uvIndex = resp.data.value
            const uvIndexLabel = "UVI: " + uvIndex

        
            // NEW WEATHER OBJECT MODEL
            const updatedWeatherObj = {
                // locationName: cityName,
                todayDate: todayDate,
                iconImg: iconImg, 
                temp: tempLabel,
                tempMax: tempMaxLabel,
                tempMin: tempMinLabel,
                humid: humidLabel,
                wind: windLabel,
                uvIndex: uvIndexLabel
            }
            
            // SET STATE ON WEATHER OBJECT
            return updatedWeatherObj
            
        })

        return newWeatherObj

    }

}