import React from 'react';
import '../../css/mainWeatherCSS.css';

function ForecastWeather(props){
    console.log(props)
    return(

            <div className="forecastSection">
                <div className="col-12">
                    <div className="col-12">
                        <h2 className="forecastDate">
                            {props.dayDate}
                        </h2>
                    </div>
                    <div className="row ">
                        <div className="col-6">
                            <img src={props.forecastIcon} className="dailyForecastImg" alt="dailyForecast" placeholder="Forecast"></img>
                            <h2 className="forecastTemp">{props.tempDay}</h2>
                        </div>
                        <div className="col-6">
                            <h2 id="highLowTemp">{props.temp_max}</h2>
                            <h2 id="highLowTemp">{props.temp_min}</h2>
                        </div>
                    </div>
                    <div className="col-12">
                        <h2 id="forecastDescription">
                            {props.weatherDescription}
                        </h2>  
                    </div>
                </div>
            </div>
    )
}

export default ForecastWeather