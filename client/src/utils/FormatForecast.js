export default {

    getForecastArray: function (resp){
        // console.log(resp)

        let forecastArray = [];
        let todayFullDate = new Date();

        // NEW WEATHER OBJECT MODEL
        for (var i=0; i<5;i++){

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

            let updatedForecastObj = {
                _id: (i+1),
                dayDate: dayName,
                forecastIcon: (require('../images/' + resp.data.list[i].weather[0].icon + '@2x.png')),
                temp: resp.data.list[i].main.temp,
                temp_max: resp.data.list[i].main.temp_max,
                temp_min: resp.data.list[i].main.temp_min,
                humidity: resp.data.list[i].main.humidity,
                wind_Direction: resp.data.list[i].wind.deg,
                wind_Speed: resp.data.list[i].wind.speed
            }

            forecastArray.push(updatedForecastObj)
        }

        // console.log(forecastArray)

        return forecastArray
    }

}