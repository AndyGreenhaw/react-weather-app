import axios from 'axios'

export default {

    getWeather: function(queryURL) {
        return axios({
            method: 'GET',
            url: queryURL
        })
    },

    getForecast: function(queryURL) {
        return axios({
            method: 'GET',
            url: queryURL
        })
    },

    getUV: function(cityCoordinates) {
        return axios({
            method: 'GET',
            url: cityCoordinates
        })
    },

    
}

