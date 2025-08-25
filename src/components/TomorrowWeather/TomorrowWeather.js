import React from 'react';
import './tomorrowWeather.css';

function TomorrowWeather(props){

    return(
        <div className="col-12 rightWeatherSection">
                                                        
            <div className="row">
                <div className="col-12 tomorrowBox">
                    <h2 className="boxHead">Tomorrow</h2>
                    <img id="windImage"
                    src={props.tomorrowIconImg}
                    placeholder="Wind Direction"
                    >
                    </img>
                    <h2>{props.tomorrowTempDay}</h2>
                    {/* <h2>{props.tomorrowHumidity}</h2>
                    <h2>{props.Wind_Speed}</h2> */}
                </div>
            </div>
            <div className="row">
                <div className="col-12 tomorrowBox">
                    <h2 className="boxHead">Weekend</h2>
                
                    <div className="row">
                        <div className="col-6">
                            <h2>Saturday</h2>
                            <img id="windImage"
                                src={props.satIcon}
                                placeholder="Wind Direction"
                                >
                            </img>
                            <h2>{props.satTempDay}</h2>
                        </div>

                        <div className="col-6">       
                            <h2>Sunday</h2>
                            <img id="windImage"
                                src={props.sunIcon}
                                placeholder="Wind Direction"
                            >
                            </img>
                            <h2>{props.sunTempDay}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TomorrowWeather