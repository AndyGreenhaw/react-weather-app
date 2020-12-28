import React from "react";
// import "./styles.css";

import { Line } from "react-chartjs-2";

function Charts2(props) {

    const options = {
        title: {
          display: true,
          text: "Temperature Forecast - Next 48 Hours"
        },
        scales: {
          yAxes: [
            {
              ticks: {
                suggestedMin: 0,
                suggestedMax: 100
              }
            }
          ]
        }
      };

    if((Object.keys(props)).length){

    console.log("READING INITIAL TIME STAMPS")
    console.log(Object.values(props))

    const allTime = format48HoursTime(props)
    const allTemp = format48HoursTemp(props)
    // const allHumidity = format48HoursHumidity(props)
    // const allWindDir = format48HoursWindDir(props)
    // const allWindSpeed = format48HoursWindSpeed(props)

    function format48HoursTime(allHours){
        console.log(allHours)
        const allTime = []
        for(let i=0; i<24; i++){
        allTime.push(allHours[i].time)
        // allWindDir.push(allHours[i].wind_Direction)
        // allWindSpeed.push(allHours[i].wind_Speed)
        }
        return allTime
    }

    function format48HoursTemp(allHours){
        const allTemp = []
        for(let i=0; i<24; i++){
        allTemp.push(allHours[i].temp)
        }
        return allTemp
    }

    // function format48HoursHumidity(allHours){
    //     const allHumidity = []
    //     for(let i=0; i<48; i++){
    //     allHumidity.push(allHours[i].humidity)
    //     }
    //     return allHumidity
    // }

    // function format48HoursWindDir(allHours){
    //     const allWindDir = []
    //     for(let i=0; i<48; i++){
    //     allWindDir.push(allHours[i].wind_Direction)
    //     }
    //     return allWindDir
    // }

    // function format48HoursWindSpeed(allHours){
    //     const allWindSpeed = []
    //     for(let i=0; i<48; i++){
    //     allWindSpeed.push(allHours[i].wind_Speed)
    //     }
    //     return allWindSpeed
    // }

    const data = {
    labels: allTime,
    datasets: [
        {
            label: "Temperature",
            data: allTemp,
            fill: true,
            backgroundColor: "rgba(245, 66, 66,0.2)",
            borderColor: "rgba(245, 66, 66,1)"
        },
        // {
        //     label: "Humidity",
        //     data: allHumidity,
        //     fill: false,
        //     borderColor: "#742774"
        // },
        // {
        //     label: "Wind Direction",
        //     data: allWindDir,
        //     fill: false,
        //     borderColor: "#742774"
        // },
        // {
        //     label: "Wind Speed",
        //     data: allWindSpeed,
        //     fill: false,
        //     borderColor: "#742774"
        // }
    ]
    };

        return (
            <div className="App">
            <Line data={data} />
            </div>
        );
    } else {
        const data = {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            datasets: [
              {
                label: "First dataset",
                data: [33, 53, 85, 41, 44, 65],
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(245, 66, 66,1)"
              },
              {
                label: "Second dataset",
                data: [33, 25, 35, 51, 54, 76],
                fill: false,
                borderColor: "#742774"
              }
            ]
          };
          
          
            return (
              <div className="App">
                <Line data={data} options={options} />
              </div>
            );
          
    }
}

export default Charts2