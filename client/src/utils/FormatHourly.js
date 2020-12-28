export default {

    getHourlyArray: function (resp){
        console.log("HOURLY RAW DATA:")
        console.log(resp.data.hourly)

        let hourlyArray = [];

        // NEW WEATHER OBJECT MODEL
        for (let i=0; i<48;i++){


            let unixTimeStamp = resp.data.hourly[i].dt
            let fullDate = new Date(unixTimeStamp * 1000);
            let allHours = fullDate.getHours()

            var formattedTime = allHours + ':' + "00";

            console.log(formattedTime);

            const forecastIcon = (require('../images/' + resp.data.hourly[i].weather[0].icon + '@2x.png'))
            const temp = resp.data.hourly[i].temp
            const humidity = resp.data.hourly[i].humidity
            const wind_Direction = resp.data.hourly[i].wind_deg
            const wind_Speed = resp.data.hourly[i].wind_speed

            let updatedHourlyArray = {
                _id: (i+1),
                time: formattedTime,
                forecastIcon: forecastIcon,
                temp: temp,
                humidity: humidity,
                wind_Direction: wind_Direction,
                wind_Speed: wind_Speed
            }

            hourlyArray.push(updatedHourlyArray)
        }
        console.log(hourlyArray[0].temp)
        return hourlyArray
        
    }
}