import React from 'react';
import './mainWeatherCSS.css'

function MainWeather(props){

    // console.log(props)

    return(
        <>
        
        {/* BLUE BOX */}
        <div className="row">

            <div className="col-8 cityDateHeader">

                <div className="mainCityNameBox">
                    <h1 className="mainCityText">{props.locationName}</h1>
                </div>
                <div className="mainDateBox">
                    <h2 className="mainDateText">{props.todayDate}</h2>
                </div>

            </div>

            <div className="col-12 mainThreeDataPoints">
                <div className="row">
                    <div className="col-4 leftWeatherSection">
                        <img className="mainIcon"
                            src= {props.iconImg}
                            placeholder="weatherIcon">
                        </img>
                    </div>
                    
                
                    <div className="col-4 leftWeatherSection">
                        <h2 id="mainTempText">{props.temp}</h2>
                    
                        
                    </div>
                    
                    <div className="col-4 leftWeatherSection">
                        <img id="windImage"
                        src={props.windDirectionImage}
                        placeholder="Wind Direction"
                        >
                        </img>
                        
                    </div>

                    
                </div>

                <div className="row">
                    <div className="col-4 leftWeatherSection">
                        <h2 id="weatherDescription">{props.description}</h2>  
                    </div>
                    <div className="col-4 leftWeatherSection">
                        <h2 id="highLowTemp">{props.tempMax}</h2>
                        <h2 id="highLowTemp">{props.tempMin}</h2>
                    </div>
                    <div className="col-4 leftWeatherSection">
                        <h2 id="windDirection">{props.windDirection}</h2>
                        <h2 id="windSpeed">{props.windSpeed}</h2>
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}

export default MainWeather;

{/* <div className="humidBox">
                        <h3 id="mainHumidText">{props.humid}</h3>
                    </div>
                    <div className="windBox">
                        <h3 id="mainWindText">{props.wind}</h3>
                    </div>
                    <div className="uvIndexBox">
                        <h3 id="mainUVText">{props.uvIndex}</h3>
                    </div> */}     