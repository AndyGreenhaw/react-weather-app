export default {

    getForecastArray: function (resp){

        let forecastArray = [];
        let todayFullDate = new Date();

        // NEW WEATHER OBJECT MODEL
        let weather = resp.data;
        weather.list.forEach(weatherDay => {
        // for (var i=0; i<7;i++){

            let dayName;

            if((todayFullDate.getDay()+1)<7){

            let forecastDayName = ((todayFullDate.getDay())+1);
            formatDays(forecastDayName)

            } else {

            let forecastDayName = ((todayFullDate.getDay())-6);
            formatDays(forecastDayName)
            }

            function formatDays(forecastDayName){
                switch(forecastDayName) {
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
                }
            }

            const forecastIcon = (require('../images/' + weatherDay?.weather[0]?.icon + '@2x.png'))

            // SETTING DATA FOR FORECAST DISPLAYS
            const tempMorn = Math.round(weatherDay.main.temp.morn)
            const tempDay = Math.round(weatherDay.main.temp.day) + "°"
            const tempEvening = Math.round(weatherDay.main.temp.eve)
            const tempNight = Math.round(weatherDay.main.temp.night)
            const tempMax = Math.round(weatherDay.main.temp.max)
            const tempMin =  Math.round(weatherDay.main.temp.min)
                        
            const humidity = Math.round(weatherDay.humidity)
            const wind_Direction = Math.round(weatherDay.wind_deg)
            const wind_Speed = Math.round(weatherDay.wind_speed)


                let updatedForecastObj = {
                    // _id: (i+1),
                    dayDate: dayName,
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

                }
                forecastArray.push(updatedForecastObj)
            // }
        // }
        })

        return forecastArray
    }

}