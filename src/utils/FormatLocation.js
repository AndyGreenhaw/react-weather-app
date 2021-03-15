import axios from 'axios'

const apiKey = "e7d65f8500681df1e3559a6964e703f1";

export default {

    getLocation: function(searchInput) {

        const googleKey = "AIzaSyBNW2fMFQAp6K1CYKC5sWlNVNa89rwR2eU"
        const googlePlaceURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + searchInput + "&key=" + googleKey + "&sensor=true"
        // console.log(googlePlaceURL)

        return axios({
            method: 'GET',
            url: googlePlaceURL
        })
        .then( resp => {
            console.log("GOOGLE LOCATION DATA:")
            console.log(resp)

            const longAddress = resp.data.results[0].formatted_address
            const cityName = longAddress.split(',')[0]
            const stateName = longAddress.split(',')[1].trim().slice(0,2)

            const cityAndState = (cityName + ", " + stateName)

            // console.log("CITY AND STATE:")
            // console.log(cityAndState)

            const locationLat = resp.data.results[0].geometry.location.lat
            const locationLong = resp.data.results[0].geometry.location.lng

            const ajaxWeatherRequest = {
                ajaxOneCallURL: "https://api.openweathermap.org/data/2.5/onecall?lat=" + locationLat + "&lon=" + locationLong + "&exclude={part}&units=imperial&appid=" + apiKey,
                ajaxRequestURL: "https://api.openweathermap.org/data/2.5/weather?lat=" + locationLat + "&lon="+ locationLong + "&units=imperial&appid=" + apiKey,
                ajaxForecastURL: "https://api.openweathermap.org/data/2.5/forecast?lat=" + locationLat + "&lon="+ locationLong + "&units=imperial&appid=" + apiKey,
                formattedAddress: cityAndState
            }

            return ajaxWeatherRequest
        })
    }

}