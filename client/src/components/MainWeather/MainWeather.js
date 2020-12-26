import React from 'react';
import './mainWeatherCSS.css'

function MainWeather(props){

    return(
        <div className="main">
            <div className="row mainCityNameBox">
                <h1 className="mainCityText">{props.locationName}</h1>
            </div>
            <div className="row mainDateBox">
                <h2 className="mainDateText">{props.todayDate}</h2>
            </div>


            <div className="row mainIconBox">
                <img 
                    className="mainIcon"
                    src= {props.iconImg}
                    placeholder="weatherIcon">
                </img>
            </div>

            <div className="mainWeatherDetails">
                <div className="row mainTempBox">
                    <h3 id="mainTempText">{props.temp}</h3>
                </div>
                <div className="row humidBox">
                    <h3 id="mainHumidText">{props.humid}</h3>
                </div>
                <div className="row windBox">
                    <h3 id="mainWindText">{props.wind}</h3>
                </div>
                <div className="row uvIndexBox">
                    <h3 id="mainUVText">{props.uvIndex}</h3>
                </div>
            </div>

        </div>
    )
}

export default MainWeather;