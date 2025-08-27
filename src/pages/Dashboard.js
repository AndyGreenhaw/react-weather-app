// IMPORT CSS
import '../index.css'

import React, {useState, useEffect, useLayoutEffect} from "react";
import Nav from 'react-bootstrap/Nav'
import { Collapse } from 'reactstrap';

//IMPORT COMPONENTS
import MainWeather from "../components/MainWeather/MainWeather.js"
import ForecastWeather from "../components/ForecastWeather/ForecastWeather.js"
import HourlyWeather from "../components/HourlyWeather/HourlyWeather.js"
import TempLineGraph from "../components/LineGraphs/TempLineGraph.js"

import TomorrowWeather from "../components/TomorrowWeather/TomorrowWeather.js"

// IMPORT FUNCTIONS
import API from "../utils/API.js"
import FormatTodayWeather from "../utils/FormatTodayWeather"
import FormatForecast from '../utils/FormatForecast'
import FormatLocation from '../utils/FormatLocation'
import FormatHourly from "../utils/FormatHourly"



// IMPORT GRAPHICS
const searchIcon = require("../images/searchIcon-small.png")

// DASHBOARD STATE FUNCTIONS START
function Dashboard() {

    const [searchInput, setSearchInput] = useState("Denver")
    const [weatherObj, setWeatherObject] = useState({})
    const [forecastArray, setForecastArray] = useState([])
    const [hourlyArray, setHourlyArray] = useState([])
    const [tomorrowObj, setTomorrowObj] = useState({})
    const [satWeather, setSatWeather] = useState ({})
    const [sunWeather, setSunWeather] = useState ({})
    
    // COLLAPSIBLE OPTIONS
    const [todayIsOpen, setTodayIsOpen] = useState(true);
    const toggleToday = () => {
        setTodayIsOpen(true);
        setDailyIsOpen(false)
        setHourlyIsOpen(false)
    }
    
    const [dailyIsOpen, setDailyIsOpen] = useState(false);
    const toggleDaily = () => {
        setDailyIsOpen(true);
        setTodayIsOpen(false);
        setHourlyIsOpen(false)
    }

    const [hourlyIsOpen, setHourlyIsOpen] = useState(false);
    const toggleHourly = () => {
        setHourlyIsOpen(true);
        setTodayIsOpen(false);
        setDailyIsOpen(false)
    }

    // USE EFFECT: LOAD DENVER
    useLayoutEffect(() => {
        setSearchInput("Denver")
        submitSearch()
    }, [])
      
    // HANDLE INPUT CHANGE
    function handleInputChange(e) {
        const charInput = e.target.value
        setSearchInput(charInput)
    }
    
    // SUBMIT SEARCH
    function submitSearch (e) {
        // FORMAT LOCATION
        FormatLocation.getLocation(searchInput).then(locationObj => {
            
            // FORMAT API REQUESTS
            const todayAPI = locationObj.ajaxCurrentWeatherURL
            const fiveDayForecastAPI = locationObj.ajaxFiveDayForecastURL

            // API REQUEST - PRIMARY WEATHER 
            API.getWeather(todayAPI).then(resp => {

                // FORMAT WEATHER DATA INTO OBJECT
                const newWeatherObj = FormatTodayWeather(resp)
                return(newWeatherObj)

            }).then( newWeatherObj => {
                // SET WEATHER
                setWeatherObject(newWeatherObj)
            })

            // API REQUEST - FORECAST  
            API.getForecast(fiveDayForecastAPI).then(resp => {
                // FORMAT FORECAST INTO OBJECT
                const forecastArray = FormatForecast(resp)
                // const hourlyArray = FormatHourly.getHourlyArray(resp)
                
                // const forecastObj = {}
                // forecastObj.forecastArray = forecastArray
                // forecastObj.hourlyArray = hourlyArray

                return forecastArray

            }).then(forecastArray => {
                // SET FORECAST
                // const forecastArray = forecastObj.forecastArray
                // const hourlyArray = forecastObj.hourlyArray

                for(let i=0;i<forecastArray.length;i++){
                    if(forecastArray[i].dayDate==="Saturday"){
                        setSatWeather(forecastArray[i])
                    } else if(forecastArray[i].dayDate==="Sunday"){
                        setSunWeather(forecastArray[i])
                    }
                }
                forecastArray.pop()
                setForecastArray(forecastArray)
                setHourlyArray(hourlyArray)
                setTomorrowObj(forecastArray[0])
            })

        })
        
    }
    // START BUILDING PAGE
    return(
        <div className="container-fluid background">
            <div id="head">
            </div>

            {/* SEARCH BAR */}
            <div className="row">            
                <div className="col-12 searchBanner"> 
                    <input 
                        id="searchInput"  name="search" placeholder="Search by City or Zip Code"
                        value={searchInput || ""}
                        onChange={handleInputChange}
                        >
                    </input>
                    <button 
                        id="searchButton" type="submit"
                        onClick={submitSearch}>
                        <img className="searchIcon" src={searchIcon}></img>
                    </button>   
                </div>
            </div>

            {/* NAVIGATION BAR */}
            <div className="row">
                <div className="col-md-12 navBanner">
                    <Nav className="justify-content-center weatherNavBar" activeKey="/home" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
                        <Nav.Item>
                            <Nav.Link className="navItem" onClick={toggleToday}>Today</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="navItem" onClick={toggleHourly}>Hourly</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="navItem" onClick={toggleDaily}>10 Day</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="navItem" onClick={toggleDaily}>Weekend</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
            </div>
        
            {/* TODAY'S WEATHER */}
            <div className="row">
                <div className="col-12 center">  
                    <main>                     
                        <Collapse isOpen={todayIsOpen}>
                            <div className="row">
                                <div className="col-12">

                                    <MainWeather
                                        localTime={weatherObj.localTime}
                                        locationName={weatherObj.locationName}
                                        todayDate={weatherObj.todayDate}
                                        description={weatherObj.description}
                                        iconImg={weatherObj.iconImg}
                                        temp={weatherObj.temp}
                                        tempMax={weatherObj.tempMax}
                                        tempMin={weatherObj.tempMin}
                                        feelsLike={weatherObj.feelsLike}
                                        humid={weatherObj.humid}
                                        windSpeed={weatherObj.windSpeed}
                                        windDirectionImage={weatherObj.windDirectionImage}
                                        windDirection = {weatherObj.windDirection}
                                        uvIndex={weatherObj.uvIndex}

                                        /////////////////////////////
                                        tomorrowDate={tomorrowObj.dayDate}
                                        // description={tomorrowObj.description}
                                        tomorrowIconImg={tomorrowObj.forecastIcon}
                                        /////////////////////////////
                                        tomorrowTempMorn={tomorrowObj.tempMorn}
                                        tomorrowTempDay={tomorrowObj.tempDay}
                                        tomorrowTempEvening={tomorrowObj.tempEve}
                                        tomorrowTempNight={tomorrowObj.tempNight}
                                        tomorrowTempMax={tomorrowObj.temp_max}
                                        tomorrowTempMin={tomorrowObj.temp_min}  
                                        tomorrowHumidity={tomorrowObj.humidity}
                                        tomorrowWind_Direction={tomorrowObj.wind_Direction}
                                        tomorrowWind_Speed={tomorrowObj.wind_Speed}
                                        >
                                    </MainWeather>

                                            
                                </div>
                                <div className="col-12 tomorrowWeekendSection">
                                    {forecastArray.map((weatherDay, index) => (
                                        <ForecastWeather
                                            key={index}
                                            dayDate={weatherDay.dayDate}
                                            description={weatherDay.description}
                                            temperature={weatherDay.temperature}
                                            forecastIcon={weatherDay.forecastIcon}
                                            weatherDescription={weatherDay.weatherDescription}
                                            temp_max={weatherDay.temp_max}
                                            temp_min={weatherDay.temp_min}
                                            humidity={weatherDay.humidity}
                                            wind_Direction={weatherDay.wind_Direction}
                                            wind_Speed={weatherDay.wind_Speed}
                                        />
                                    ))}

                                    
                                    {/* <TomorrowWeather
                                        tomorrowDate={tomorrowObj.dayDate}
                                        // description={tomorrowObj.description}
                                        tomorrowIconImg={tomorrowObj.forecastIcon}
                                        /////////////////////////////
                                        tomorrowTemp={tomorrowObj.temperature}
                                        tomorrowTempMorn={tomorrowObj.tempMorn}
                                        tomorrowTempDay={tomorrowObj.tempDay}
                                        tomorrowTempEvening={tomorrowObj.tempEve}
                                        tomorrowTempNight={tomorrowObj.tempNight}
                                        tomorrowTempMax={tomorrowObj.temp_max}
                                        tomorrowTempMin={tomorrowObj.temp_min}  
                                        tomorrowHumidity={tomorrowObj.humidity}
                                        tomorrowWind_Direction={tomorrowObj.wind_Direction}
                                        tomorrowWind_Speed={tomorrowObj.wind_Speed}

                                        satIcon={satWeather.forecastIcon}
                                        satTemp={satWeather.temperature}
                                        satTempMorn={satWeather.tempMorn}
                                        satTempDay={satWeather.tempDay}
                                        satTempEvening={satWeather.tempEve}
                                        satTempNight={satWeather.tempNight}
                                        satTempMax={satWeather.temp_max}
                                        satTempMin={satWeather.temp_min}  
                                        satHumidity={satWeather.humidity}
                                        satWind_Direction={satWeather.wind_Direction}
                                        satWind_Speed={satWeather.wind_Speed}

                                        sunIcon={sunWeather.forecastIcon}
                                        sunTemp={satWeather.temperature}
                                        sunTempMorn={sunWeather.tempMorn}
                                        sunTempDay={sunWeather.tempDay}
                                        sunTempEvening={sunWeather.tempEve}
                                        sunTempNight={sunWeather.tempNight}
                                        sunTempMax={sunWeather.temp_max}
                                        sunTempMin={sunWeather.temp_min}  
                                        sunHumidity={sunWeather.humidity}
                                        sunWind_Direction={sunWeather.wind_Direction}
                                        sunWind_Speed={sunWeather.wind_Speed}

                                    >
                                        
                                    </TomorrowWeather> */}

                                </div>
                            </div>
                        </Collapse>
                    </main>
                </div>
            </div>
                
            {/* 10-DAY WEATHER*/}
            <div className="row">
                <div className="col-md-12">
                    <Collapse >        
                        <div className="row" isOpen={dailyIsOpen}>                        
                        {forecastArray.map(forecast => (
                            <ForecastWeather key={forecast._id} {...forecast}/>                            
                        ))}
                        </div>
                    </Collapse>   
                </div>
            </div>

            {/* HOURLY WEATHER*/}
            <div className="row">
                <div className="col-md-12">
                    <Collapse isOpen={hourlyIsOpen}>

                        <div className="col-md-12">
                            <TempLineGraph {...hourlyArray}/>
                        </div>
                    </Collapse>
                </div>      
            </div>
        </div>
    )

}

export default Dashboard;