import axios from 'axios'

export default {

    getLocation: (searchInput) => {

    let formattedSearchinput;

    if (!searchInput || searchInput.trim() === "") {
        formattedSearchinput = "Denver"
    } else {
        formattedSearchinput = searchInput
    }
    const googleKey = process.env.REACT_APP_GOOGLE_API_KEY;
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

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
                // Current Weather (Free Tier)
                ajaxCurrentWeatherURL: `https://api.openweathermap.org/data/2.5/weather?lat=${locationLat}&lon=${locationLong}&units=imperial&appid=${apiKey}`,
                // 5-Day / 3-Hour Forecast (Free Tier)
                ajaxFiveDayForecastURL: `https://api.openweathermap.org/data/2.5/forecast?lat=${locationLat}&lon=${locationLong}&units=imperial&appid=${apiKey}`,
                // One Call Replacement (Not Free — commented out or gated)
                formattedAddress: cityAndState
            };
        });
}


}