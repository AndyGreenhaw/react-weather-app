import React from "react";
import { Line } from "react-chartjs-2";

export default function LineGraph (props) {

  // console.log(props)
  // const [displayData,setDisplayData] = useState([])
  // const [displayTime,setTimeData] = useState([])

  // DEFAULT OPTIONS FOR TEMPERATURE
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

  // IF THE OBJECT HAD LENGTH, FORMAT THE DATA AS FOLLOWS...
  const data = () => {

    if((Object.keys(props)).length){

      // console.log("READING INITIAL TIME STAMPS")
      // console.log(Object.values(props))

      const allTime = format48HoursTime(Object.values(props))
      const allTemp = format48HoursTemp(Object.values(props))

      // ADDING TIME STAMPS TO ARRAY
      function format48HoursTime(allHours){

        const allTime = []
        for(let i=0; i<24; i++){
          allTime.push(allHours[i].time)
        }

        return allTime
          
      }

      // ADDING TEMPERATURE TO ARRAY
      function format48HoursTemp(allHours){

        // console.log(allHours)

        const allTemp = []

        for(let i=0; i<24; i++){
          allTemp.push(allHours[i].temp)
        }

        return allTemp
                  
      }

      const data = {
        labels: allTime,
        // labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "Temperature",
            data: allTemp,
            fill: true,
            backgroundColor: "rgba(245, 66, 66,0.2)",
            borderColor: "rgba(245, 66, 66,1)"
            // label: "First dataset",
            // data: [33, 53, 85, 41, 44, 65],
            // fill: true,
            // backgroundColor: "rgba(75,192,192,0.2)",
            // borderColor: "rgba(245, 66, 66,1)"
          },
        ]
      };

      // console.log(data)

      return data


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
      
      return data
          
    }
  }

// console.log(data)

  return (
    <div className="App">
      <Line data={data} options={options} />
    </div>
  );
}