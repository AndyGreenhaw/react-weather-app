import React from 'react';
import './forecastCSS.css';

export default function ForecastWeather(props){
    return(

        <div className="row">
            <div className="col-md-3">
                <p>{props.dayDate}</p>
                <img src={props.forecastIcon} placeholder="Forecast"></img>
                <p>{props.temp}</p>
                <p>{props.humidity}</p>
            </div>
        </div>
    )
}