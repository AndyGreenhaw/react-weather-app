import API from "./API"
import FormatDate from './FormatDate'

export default (resp) => {

    // PRIMARY ELEMENTS
    // getTodayWeather: async function(resp) {

        const cityName = resp.data.name
        const todayDate = FormatDate.getDate()
        const iconImg = (require('../images/' + resp.data.weather[0]?.icon + '@2x.png'))

        // WEATHER DATA
        const weatherDescription = resp.data.weather[0]?.description
        const temp = Math.round(resp.data?.main?.temp)
        const tempMax = Math.round(resp.data?.main.temp_max)
        const tempMin = Math.round(resp.data?.main.temp_min)
        const humid = resp.data?.main.humidity
        const windSpeed = Math.round(resp.data?.wind.speed)
        const feelsLike = resp.data?.main.feels_like

        // FORMAT WIND IMAGFE
        const windDegrees = resp.data?.wind.deg;

        let windDirectionImage;
        let windDirection;

        if(windDegrees >= 0 && windDegrees <= 11 || windDegrees >= 349){
            windDirectionImage = (require('../images/compass-North.png'))
            windDirection = "N"
        } else if (windDegrees >= 12 && windDegrees <= 78){
            windDirectionImage = (require('../images/compass-Northeast.png'))
            windDirection = "NE"
        } else if (windDegrees >= 79 && windDegrees <= 101){
            windDirectionImage = (require('../images/compass-East.png'))
            windDirection = "E"
        } else if (windDegrees >= 102 && windDegrees <= 168){
            windDirectionImage = (require('../images/compass-Southeast.png'))
            windDirection = "SE"
        } else if (windDegrees >= 169 && windDegrees <= 191){
            windDirectionImage = (require('../images/compass-South.png'))
            windDirection = "S"
        } else if (windDegrees >= 192 && windDegrees <= 236){
            windDirectionImage = (require('../images/compass-Southwest.png'))
            windDirection = "SW"
        } else if (windDegrees >= 237 && windDegrees <= 258){
            windDirectionImage = (require('../images/compass-West.png'))
            windDirection = "W"
        } else if (windDegrees >= 259 && windDegrees <= 348){
            windDirectionImage = (require('../images/compass-Northwest.png'))
            windDirection = "NW"
        }

        // UV LOCATION DATA
        const latC = resp.data?.coord.lat;
        const lonC = resp.data?.coord.lon;
        const coordinatesOpenWeatherAPI = "https://api.openweathermap.org/data/2.5/uvi?lat=" + latC + "&lon=" + lonC + "&appid=e7d65f8500681df1e3559a6964e703f1"
        
        // WEATHER LABELS
        const descriptionLabel = weatherDescription
        const tempLabel = temp + "°"
        const tempMaxLabel = "High " + tempMax + "°"
        const tempMinLabel = "Low " + tempMin + "°"
        const feelsLikeLabel = "Feels Like " + feelsLike + "°"

        const humidLabel = "Humidity: " + humid + "%"
        const windDirectionLabel = windDirection + " Wind"
        const windSpeedLabel = windSpeed + " mph"

        // AJAX REQUEST FOR UVI
        // const newWeatherObj = API.getUV(coordinatesOpenWeatherAPI).then( resp => {

            // UVI NUMBER
            const uvIndex = resp.data.value
            const uvIndexLabel = "UVI: " + uvIndex

        
            // NEW WEATHER OBJECT MODEL
            const updatedWeatherObj = {
                locationName: cityName,
                todayDate: todayDate,
                iconImg: iconImg, 
                description: weatherDescription,
                temp: temp,
                tempMax: tempMaxLabel,
                tempMin: tempMinLabel,
                feelsLike: feelsLikeLabel,
                humid: humidLabel,
                windDirectionImage: windDirectionImage,
                windDirection: windDirectionLabel,
                windSpeed: windSpeedLabel,
                // uvIndex: uvIndexLabel
            }
            
            // SET STATE ON WEATHER OBJECT
            // return updatedWeatherObj
            
        // })

        return updatedWeatherObj

    // }

}