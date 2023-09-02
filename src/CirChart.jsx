import React from 'react'
import {ArcElement,Chart} from "chart.js";
import { Pie } from 'react-chartjs-2';
import './chart.css'
Chart.register(ArcElement);

const CirChart = () => {
    
    const data = {
        labels: ['Category A', 'Category B', 'Category C'],
        datasets: [
          {
            data: [30, 40, 30], // Replace with your own data values
            backgroundColor: ['#007bff', '#28a745', '#ff5733'], // Slice colors
          },
        ],
      };
    
    return (
        <>
        
            <h1>App Products</h1>
            <div className="chart-container" >
                <Pie data={data} />
            </div>
        </>
    );
}

export default CirChart