import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function LineGraph(props) {
  // Format time labels
  function format48HoursTime(dataArray) {
    return dataArray.slice(0, 24).map(hour => hour.time);
  }

  // Format temperature values
  function format48HoursTemp(dataArray) {
    return dataArray.slice(0, 24).map(hour => hour.temp);
  }

  // Build chart data
  const getChartData = () => {
    const dataArray = Object.values(props);

    if (Array.isArray(dataArray) && dataArray.length >= 24) {
      const labels = format48HoursTime(dataArray);
      const temps = format48HoursTemp(dataArray);

      return {
        labels,
        datasets: [
          {
            label: "Temperature",
            data: temps,
            fill: true,
            backgroundColor: "rgba(245, 66, 66, 0.2)",
            borderColor: "rgba(245, 66, 66, 1)"
          }
        ]
      };
    }

    // Fallback demo data
    return {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "Demo Dataset",
          data: [33, 53, 85, 41, 44, 65],
          fill: true,
          backgroundColor: "rgba(75,192,192,0.2)",
          borderColor: "rgba(245, 66, 66,1)"
        }
      ]
    };
  };

  // Chart options (Chart.js v3+ syntax)
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Temperature Forecast - Next 48 Hours"
      },
      legend: {
        position: "top"
      }
    },
    scales: {
      x: {
        type: "category"
      },
      y: {
        min: 0,
        max: 100,
        ticks: {
          stepSize: 10
        }
      }
    }
  };

  return (
    <div className="App">
      <Line data={getChartData()} options={options} />
    </div>
  );
}
