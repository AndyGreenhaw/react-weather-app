export default {

    getForecastArray: function (resp){
        // console.log("FORECAST DATA:")
        // console.log(resp)

        let forecastArray = [];
        let todayFullDate = new Date();

        // NEW WEATHER OBJECT MODEL
        for (var i=0; i<7;i++){

            let dayName;

            if((todayFullDate.getDay()+1+i)<7){

            let forecastDayName = ((todayFullDate.getDay())+1+i);
            formatDays(forecastDayName)

            } else {

            let forecastDayName = ((todayFullDate.getDay())-6+i);
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

            const forecastIcon = (require('../images/' + resp.data.daily[i].weather[0].icon + '@2x.png'))

            // SETTING DATA FOR FORECAST DISPLAYS
            const tempMorn = Math.round(resp.data.daily[i].temp.morn)
            const tempDay = Math.round(resp.data.daily[i].temp.day) + "°"
            const tempEvening = Math.round(resp.data.daily[i].temp.eve)
            const tempNight = Math.round(resp.data.daily[i].temp.night)
            const tempMax = Math.round(resp.data.daily[i].temp.max)
            const tempMin =  Math.round(resp.data.daily[i].temp.min)
                        
            const humidity = Math.round(resp.data.daily[i].humidity)
            const wind_Direction = Math.round(resp.data.daily[i].wind_deg)
            const wind_Speed = Math.round(resp.data.daily[i].wind_speed)


                let updatedForecastObj = {
                    _id: (i+1),
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
                // console.log(updatedForecastObj)
                forecastArray.push(updatedForecastObj)
            // }
        }

        // console.log(forecastArray)

        return forecastArray
    }

}