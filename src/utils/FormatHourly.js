export default {

    getHourlyArray: function (resp){
        //  console.log(resp.data.hourly)
        

        let hourlyArray = [];

        // NEW WEATHER OBJECT MODEL
        for (let i=0; i<48;i++){


            let unixTimeStamp = resp.data.hourly[i].dt
            let fullDate = new Date(unixTimeStamp * 1000);
            let allHours = fullDate.getHours()
            let formattedTime

            if(allHours > 0 && allHours < 12){
                formattedTime = allHours + " am"
            } else if (allHours === 12){
                formattedTime = "12 pm"
            } else if (allHours === 0){
                formattedTime = "12 am"
            } else {
                formattedTime = (allHours-12) + " pm";
            }

            const forecastIcon = (require('../images/' + resp.data.hourly[i].weather[0].icon + '@2x.png'))
            const temp = resp.data.hourly[i].temp
            const humidity = resp.data.hourly[i].humidity
            const wind_Direction = resp.data.hourly[i].wind_deg
            const wind_Speed = resp.data.hourly[i].wind_speed

            const updatedHourlyArray = {
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
        // console.log(hourlyArray[0].temp)
        return hourlyArray
        
    }
}