export default (resp) => {

    let forecastArray = [];
    let todayFullDate = new Date();
    let currentDayIndex = todayFullDate.getDay();
    console.log(resp.data)
    // Helper function stays exactly as you wrote it
    function formatDays(forecastDayName) {
        let dayName;

        switch (forecastDayName) {
            case 0:
                dayName = "Sunday";
                break;
            case 1:
                dayName = "Monday";
                break;
            case 2:
                dayName = "Tuesday";
                break;
            case 3:
                dayName = "Wednesday";
                break;
            case 4:
                dayName = "Thursday";
                break;
            case 5:
                dayName = "Friday";
                break;
            case 6:
                dayName = "Saturday";
                break;
            default:
                dayName = "";
        }

        return dayName;
    }

    // Loop through forecast list
    resp.data.list.forEach((weatherDay, index) => {
        // Calculate forecast day index (rolling forward)
        let forecastDayIndex = (currentDayIndex + index + 1) % 7;
        let dayName = formatDays(forecastDayIndex);
        console.log(weatherDay)
        const iconCode = weatherDay.weather[0].icon.replace("n", "d");
        const iconImg = (require('../images/' + iconCode + '@2x.png'))
        
        // WEATHER DATA
        const weatherDescription = weatherDay?.weather[0]?.description
        const temp = Math.round(weatherDay?.main?.temp)
        const tempMax = Math.round(weatherDay?.main.temp_max)
        const tempMin = Math.round(weatherDay?.main.temp_min)
        const humid = weatherDay?.main.humidity
        const windSpeed = Math.round(weatherDay?.wind.speed)
        const feelsLike = weatherDay?.main.feels_like

        // FORMAT WIND IMAGFE
        const windDegrees = weatherDay?.wind.deg;

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

        // WEATHER LABELS
        const descriptionLabel = weatherDescription
        const tempLabel = temp + "°"
        const tempMaxLabel = "High " + tempMax + "°"
        const tempMinLabel = "Low " + tempMin + "°"
        const feelsLikeLabel = "Feels Like " + feelsLike + "°"

        const humidLabel = "Humidity: " + humid + "%"
        const windDirectionLabel = windDirection + " Wind"
        const windSpeedLabel = windSpeed + " mph"

        // const forecastIcon = require('../images/' + weatherDay?.weather[0]?.icon + '@2x.png');

        // const temperature = Math.round(weatherDay.main.temp);
        // const tempMorn = Math.round(weatherDay.main.temp.morn);
        // const tempDay = Math.round(weatherDay.main.temp.day) + "°";
        // const tempEvening = Math.round(weatherDay.main.temp.eve);
        // const tempNight = Math.round(weatherDay.main.temp.night);
        // const tempMax = Math.round(weatherDay.main.temp.max);
        // const tempMin = Math.round(weatherDay.main.temp.min);

        // const humidity = Math.round(weatherDay.humidity);
        // const wind_Direction = Math.round(weatherDay.wind_deg);
        // const wind_Speed = Math.round(weatherDay.wind_speed);

        let updatedForecastObj = {
            dayDate: dayName,
            temperature: tempLabel,
            weatherDescription: descriptionLabel,
            forecastIcon: iconImg,
            temp: tempLabel,
            temp_max: tempMaxLabel,
            temp_min: tempMinLabel,
            humidity: humidLabel,
            wind_Direction: windDirectionLabel,
            wind_Speed: windSpeedLabel,
        };

        forecastArray.push(updatedForecastObj);
    });

    return forecastArray;
};
