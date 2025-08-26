import React from 'react';
import './mainWeatherCSS.css'

function MainWeather(props){
    console.log(props)

    return(
        <>
        
        {/* BLUE BOX */}
        <div className="row">
            {/* HEADER */}
            <div className="col-12 cityDateHeader">
                <div className="mainDateBox">
                    <h2 className="mainDateText">{props.todayDate}</h2>
                </div>

            </div>

            <div className="col-12 mainThreeDataPoints">
                <div className="row">
                    <div className="col-7 leftWeatherSection">
                        <img className="mainIcon"
                            src= {props.iconImg}
                            placeholder="weatherIcon">
                        </img>
                        <h2 id="weatherDescription">{props.description}</h2>  
                    </div>
                    
                
                    <div className="col-5 leftWeatherSection">
                        <h2 id="mainTempText">{props.temp}</h2>
                        <h2 id="highLowTemp">{props.tempMax}</h2>
                        <h2 id="highLowTemp">{props.tempMin}</h2>
                    </div>
                </div>
                
                <div className="row">
                    {/* <div className="col-12 leftWeatherSection"> */}
                        <div className='col-4'>
                            <img id="windImage"
                                src={props.windDirectionImage}
                                placeholder="Wind Direction"
                            >
                            </img>
                        </div>
                        <div className='col-4'>
                        <h2 id="windDirection">{props.windDirection}</h2>
                        </div>
                        <div className='col-4'>
                        <h2 id="windSpeed">{props.windSpeed}</h2>
                        </div>
                    {/* </div> */}
                </div>
                   

            </div>
        </div>
        </>
    )
}

export default MainWeather;