import axios from 'axios'

const apiKey = "e7d65f8500681df1e3559a6964e703f1";

export default {

    getLocation: function(searchInput) {

    let formattedSearchinput;

    if (!searchInput || searchInput.trim() === "") {
        formattedSearchinput = "Denver"
    } else {
        formattedSearchinput = searchInput
    }
    const googleKey = process.env.REACT_APP_GOOGLE_API_KEY;
    const googlePlaceURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(formattedSearchinput)}&key=${googleKey}&sensor=true`;

    return axios.get(googlePlaceURL)
        .then(resp => {
            const result = resp.data.results[0];
            if (!result) throw new Error("No location found");

            const longAddress = result.formatted_address;
            const cityName = longAddress.split(',')[0];
            const stateName = longAddress.split(',')[1].trim().slice(0, 2);

            const cityAndState = `${cityName}, ${stateName}`;

            const locationLat = result.geometry.location.lat;
            const locationLong = result.geometry.location.lng;

            return {
                ajaxOneCallURL: `https://api.openweathermap.org/data/2.5/onecall?lat=${locationLat}&lon=${locationLong}&exclude=minutely&units=imperial&appid=${apiKey}`,
                ajaxRequestURL: `https://api.openweathermap.org/data/2.5/weather?lat=${locationLat}&lon=${locationLong}&units=imperial&appid=${apiKey}`,
                ajaxForecastURL: `https://api.openweathermap.org/data/2.5/forecast?lat=${locationLat}&lon=${locationLong}&units=imperial&appid=${apiKey}`,
                formattedAddress: cityAndState
            };
        });
}


}