export default (resp) => {
    console.log(resp.data);

    let forecastArray = [];
    let todayFullDate = new Date();
    let currentDayIndex = todayFullDate.getDay();

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

        const forecastIcon = require('../images/' + weatherDay?.weather[0]?.icon + '@2x.png');

        const temperature = Math.round(weatherDay.main.temp);
        const tempMorn = Math.round(weatherDay.main.temp.morn);
        const tempDay = Math.round(weatherDay.main.temp.day) + "°";
        const tempEvening = Math.round(weatherDay.main.temp.eve);
        const tempNight = Math.round(weatherDay.main.temp.night);
        const tempMax = Math.round(weatherDay.main.temp.max);
        const tempMin = Math.round(weatherDay.main.temp.min);

        const humidity = Math.round(weatherDay.humidity);
        const wind_Direction = Math.round(weatherDay.wind_deg);
        const wind_Speed = Math.round(weatherDay.wind_speed);

        let updatedForecastObj = {
            dayDate: dayName,
            temperature: temperature,
            forecastIcon: forecastIcon,
            tempMorn: tempMorn,
            tempDay: tempDay,
            tempEve: tempEvening,
            tempNight: tempNight,
            temp_max: tempMax,
            temp_min: tempMin,
            humidity: humidity,
            wind_Direction: wind_Direction,
            wind_Speed: wind_Speed,
        };

        console.log(updatedForecastObj);
        forecastArray.push(updatedForecastObj);
    });

    return forecastArray;
};
