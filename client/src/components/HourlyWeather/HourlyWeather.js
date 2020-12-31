import React from 'react';
import './hourlyCSS.css';

function HourlyWeather(props){
    return(

            <div className="col-12">
                <div className="HourlyForecastBox">
                
                    <h2>{props.dayDate}</h2>
                    <img src={props.forecastIcon} className="hourlyForecastImg" alt="Hourly Weather" placeholder="Forecast"></img>
                    <p>{props.temp}</p>
                    <p>{props.humidity}</p>
                
                </div>
            </div>
    )
}

export default HourlyWeather