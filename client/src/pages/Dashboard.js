// IMPORT CSS
import '../index.css'

import React, {useState, useEffect, useLayoutEffect} from "react";
import { Collapse } from 'reactstrap';

//IMPORT COMPONENTS
import MainWeather from "../components/MainWeather/MainWeather.js"
import ForecastWeather from "../components/ForecastWeather/ForecastWeather.js"
import HourlyWeather from "../components/HourlyWeather/HourlyWeather.js"
import TempLineGraph from "../components/LineGraphs/TempLineGraph.js"

// IMPORT FUNCTIONS
import API from "../utils/API.js"
import FormatTodayWeather from "../utils/FormatWeather"
import FormatForecast from '../utils/FormatForecast'
import FormatLocation from '../utils/FormatLocation'
import FormatHourly from "../utils/FormatHourly"

// SEED DATA
// import seedHours from "../seedData/introSearchInput.json"
// console.log(seedHours)

// DASHBOARD STATE FUNCTIONS START
function Dashboard() {
    const [searchInput, setSearchInput] = useState("Denver")
    const [weatherObj, setWeatherObject] = useState({})
    const [forecastArray, setForecastArray] = useState([])
    const [hourlyArray, setHourlyArray] = useState([])
    
    // COLLAPSIBLE OPTIONS
    const [dailyIsOpen, setDailyIsOpen] = useState(false);
    const toggleDaily = () => {setDailyIsOpen(!dailyIsOpen);}

    const [hourlyIsOpen, setHourlyIsOpen] = useState(false);
    const toggleHourly = () => {setHourlyIsOpen(!hourlyIsOpen);}

    // // USE EFFECT: LOAD DENVER
    // useLayoutEffect(() => {
    //     setHourlyArray(seedHours)
    // }, [])

    // useEffect(() => {
    //     // submitSearch()
    // }, [])

    console.log("WATCH WHEN THIS CHANGES")
    console.log(hourlyArray)
      
    // HANDLE INPUT CHANGE
    function handleInputChange(e) {
        const charInput = e.target.value
        setSearchInput(charInput)
    }
    
    // SUBMIT SEARCH
    function submitSearch (e) {

        FormatLocation.getLocation(searchInput).then(locationObj => {

            const formattedAddress = locationObj.formattedAddress
            const ajaxForecastURL = locationObj.ajaxOneCallURL
            const ajaxRequestURL = locationObj.ajaxRequestURL

            // API REQUEST - PRIMARY WEATHER 
            API.getWeather(ajaxRequestURL).then(resp => {

                // FORMAT WEATHER DATA INTO OBJECT
                const newWeatherObj = FormatTodayWeather.getTodayWeather(resp)
                return(newWeatherObj)

            }).then( newWeatherObj => {

                // ADD CITY/STATE NAME TO WEATHER OBJECT
                newWeatherObj.formattedAddress = formattedAddress

                // SET WEATHER
                setWeatherObject(newWeatherObj)
            })

            // API REQUEST - FORECAST  
            API.getForecast(ajaxForecastURL).then( resp => {
                // FORMAT FORECAST INTO OBJECT
                const forecastArray = FormatForecast.getForecastArray(resp)
                const hourlyArray = FormatHourly.getHourlyArray(resp)

                const forecastObj = {}
                forecastObj.forecastArray = forecastArray
                forecastObj.hourlyArray = hourlyArray

                return forecastObj

            }).then(forecastObj => {
                // SET FORECAST
                const forecastArray = forecastObj.forecastArray
                const hourlyArray = forecastObj.hourlyArray

                console.log("SETTING HOURLY ARRAY")
                console.log(hourlyArray)
                setForecastArray(forecastArray)
                setHourlyArray(hourlyArray)
            })



        })
        
    }
    
    // START BUILDING PAGE
    return(
        <div className="container">
            <div id="head">
            </div>
            <div className="row"> 
                
                <nav className="col-md-12"> 

                    <h1>Search by City</h1>
                    <input 
                        id="searchInput"  name="search" placeholder="Enter City or Zip Code"
                        value={searchInput || ""}
                        onChange={handleInputChange}
                        >
                    </input>
                    <button 
                        id="searchButton" type="submit"
                        onClick={submitSearch}>
                        S
                    </button>   

                </nav>
        

                <main className="col-md-12">
                    
                    <MainWeather
                        locationName={weatherObj.formattedAddress}
                        todayDate={weatherObj.todayDate}
                        iconImg={weatherObj.iconImg}
                        temp={weatherObj.temp}
                        humid={weatherObj.humid}
                        wind={weatherObj.wind}
                        uvIndex={weatherObj.uvIndex}>
                    </MainWeather>
                   
                </main>

                
                
                <div className="col-md-12">
                
                    <button onClick={toggleDaily}> 
                        FORECAST DATA
                    </button>

                    <button onClick={toggleHourly}> 
                        HOURLY DATA
                    </button>

                </div>
            
                <div className="col-md-12">
                    <Collapse isOpen={dailyIsOpen}>
                    
                        <div className="row">                        
                        {forecastArray.map(forecast => (
                                <ForecastWeather key={forecast._id} {...forecast}/>                            
                        ))}
                        </div>

                    </Collapse>   
                </div>

                <div className="col-md-12">
                    <Collapse isOpen={hourlyIsOpen}>

                        
                        <div className="col-md-12">
                            <TempLineGraph {...hourlyArray}/>
                        </div>
                        
                        {/* <div className="row">
                            
                        {
                        hourlyArray.map(forecast => (
                                <HourlyWeather 
                                key={forecast._id} {...forecast}/>                            
                        ))
                        
                        }
                        </div> */}

                    </Collapse>   
                </div>
                
            </div>
            
        </div>
    )

}

export default Dashboard;