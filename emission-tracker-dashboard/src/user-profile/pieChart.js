import React from 'react';
import { Pie } from 'react-chartjs-2';

export default function PieChart() 
{
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'red',
          'blue',
          'yellow',
          'green',
          'purple',
          'orange'
        ],
        borderWidth: 1,
      }
    ]
  };

  return (
    <div>
      <h2>Pie Chart</h2>
      {/* <Pie data={data} /> */}
      <Pie
        data={data}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Carbon Emissions Today"
            }
          }
        }}
      />
    </div>
  );
}