import React from 'react';
import './tomorrowWeather.css';

function TomorrowWeather({tomorrowIconImg, satIcon, sunIcon, tomorrowTemp, satTemp, sunTemp, }){
    return(
        <div className="col-12 rightWeatherSection">
                                                        
            <div className="row">
                <div className="col-12 tomorrowBox">
                    <h2 className="boxHead">Tomorrow</h2>
                    <img id="windImage"
                    src={tomorrowIconImg}
                    placeholder="Wind Direction"
                    >
                    </img>
                    <h2>{tomorrowTemp}</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-12 tomorrowBox">
                    <h2 className="boxHead">Weekend</h2>
                
                    <div className="row">
                        <div className="col-6">
                            <h2>Saturday</h2>
                            <img id="windImage"
                                src={satIcon}
                                placeholder="Wind Direction"
                                >
                            </img>
                            <h2>{satTemp}</h2>
                        </div>

                        <div className="col-6">       
                            <h2>Sunday</h2>
                            <img id="windImage"
                                src={sunIcon}
                                placeholder="Wind Direction"
                            >
                            </img>
                            <h2>{sunTemp}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TomorrowWeather