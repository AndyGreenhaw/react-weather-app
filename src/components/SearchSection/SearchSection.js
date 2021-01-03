import React from "react";

function MainWeather(props){

    return(
    <>
        <p>Search by City</p>
        <input 
            id="searchInput" 
            name="search"
            placeholder="Enter City"
            value={props.searchInput || ""}
            onChange={props.handleInputChange}
            >
        </input>
        <button 
            id="searchButton"
            type="submit"
            onClick={props.submitSearch}>
            S
        </button>
        </>
    )
}

export default MainWeather