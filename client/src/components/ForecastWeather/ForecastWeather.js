import React from 'react';
import './forecastCSS.css';

function ForecastWeather(props){
    return(

            <div className="col-2">
                <div className="DailyForecastBox">
                
                    <h2>{props.dayDate}</h2>
                    <img src={props.forecastIcon} className="dailyForecastImg" placeholder="Forecast"></img>
                    <p>{props.temp}</p>
                    <p>{props.humidity}</p>
                
                </div>
            </div>
    )
}

export default ForecastWeather