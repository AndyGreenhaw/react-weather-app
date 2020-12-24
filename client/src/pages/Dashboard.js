import React, {useState} from "react";
import { Collapse } from 'reactstrap';

//IMPORT PAGES
import MainWeather from "../components/MainWeather/MainWeather.js"
import ForecastWeather from "../components/ForecastWeather/ForecastWeather.js"
// import SearchSection from "../components/SearchSection/SearchSection.js"

// IMPORT FUNCTIONS
import API from "../utils/API.js"
import FormatSearch from '../utils/FormatSearch'
import FormatTodayWeather from "../utils/FormatTodayWeather"
import FormatForecast from '../utils/FormatForecast'
// import FormatDate from '../utils/FormatDay'

import '../index.css'

// DASHBOARD STATE FUNCTIONS START
function Dashboard() {
    const [searchInput, setSearchInput] = useState()
    const [weatherObj, setWeatherObject] = useState({})
    const [forecastObj, setForecastObject] = useState([])
    
    // COLLAPSIBLE OPTIONS
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {setIsOpen(!isOpen);
    }

    // USE EFFECT: LOAD DENVER
    // useEffect(() => {
    //     toggle()
    // }, [collapse])
      
    // HANDLE INPUT CHANGE
    function handleInputChange(e) {
        const charInput = e.target.value
        setSearchInput(charInput)
    }
    
    // SUBMIT SEARCH
    function submitSearch (e) {

        // FORMAT URL - See ../Utils/FOrmatSearch
        const apiURLObject = FormatSearch.getURL(searchInput)
        const queryTodayURL = apiURLObject.URL_Today
        const queryForecastURL = apiURLObject.URL_Forecast
    
        // API REQUEST - PRIMARY WEATHER 
        API.getWeather(queryTodayURL).then( resp => {
            // FORMAT WEATHER INTO OBJECT
            const newWeatherObj = FormatTodayWeather.getTodayWeather(resp)
            return(newWeatherObj)
        }).then(newWeatherObj => {
            // SET WEATHER
            setWeatherObject(newWeatherObj)
        })

        // API REQUEST - FORECAST  
        API.getForecast(queryForecastURL).then( resp => {
            // FORMAT FORECAST INTO OBJECT
            const forecastArray = FormatForecast.getForecastArray(resp)
            return forecastArray
        }).then(forecastArray => {
            // SET FORECAST
            setForecastObject(forecastArray)
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
                            cityName={weatherObj.cityName}
                            todayDate={weatherObj.todayDate}
                            iconImg={weatherObj.iconImg}
                            temp={weatherObj.temp}
                            humid={weatherObj.humid}
                            wind={weatherObj.wind}
                            uvIndex={weatherObj.uvIndex}>
                        </MainWeather>
                   
                </main>
                <div className="row">
                <button
                onClick={toggle}>BUTTON</button>

                <Collapse 
                    isOpen={isOpen}
                >
                        {forecastObj.map(forecast => (
                        <ForecastWeather key={forecast._id} {...forecast}
                        />
                        ))}
                 </Collapse>
                </div>
            </div>
            
        </div>
    )

}

export default Dashboard;