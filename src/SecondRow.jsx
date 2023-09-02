import { Bar } from 'react-chartjs-2';
import { BarElement,LinearScale,CategoryScale, Chart } from "chart.js";
import './chart.css';
Chart.register(CategoryScale);
Chart.register(LinearScale);
Chart.register(BarElement);
function SecondRow() {

 
         
          const data = {
    labels: ['Quantity 1', 'Quantity 2'],
    datasets: [
      {
        label: 'Week1',
        data: [50, 75], // Replace with your own data values
        backgroundColor: ['#007bff', '#28a745'], // Bar colors
      },
      {
        label: 'Week2',
            data: [60, 75], // Replace with your own data values
        backgroundColor: ['#007bff', '#28a745'], // Bar colors
        },
        {
            label: 'Week3',
            data: [50, 95], // Replace with your own data values
            backgroundColor: ['#007bff', '#28a745'], // Bar colors
          },
    ],


      
  };

  // Chart options
  const options = {
    scales: {
      
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Values',
        },
          },
        
    },
  };

  return (
   <>
   <div className="cardch">
          <h4>Activities</h4>
          <h6 style={{color:'grey'}}>12 May</h6>
      <div className="chart-containerbar">
        <Bar data={data} options={options} />
              </div>
              </div>
    </>
  );
 
}

export default SecondRow;
