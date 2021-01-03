import React from 'react';
import './forecastCSS.css';

function ForecastWeather(props){
    return(
        // <div className="row ">
                <div className="col-2 forecastSection">
                    <div className="forecastBox">
                    
                        <h2 className="forecastDate">{props.dayDate}</h2>
                        <img src={props.forecastIcon} className="dailyForecastImg" alt="dailyForecast" placeholder="Forecast"></img>
                        <h2 className="forecastTemp">{props.tempDay}</h2>
                    </div>
                    
                </div>
        // </div>
    )
}

export default ForecastWeather