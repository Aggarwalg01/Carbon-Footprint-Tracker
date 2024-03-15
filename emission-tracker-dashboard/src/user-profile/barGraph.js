import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarGraph = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      }
    ]
  };

  return (
    <div>
      <h2>Bar Graph</h2>
      <Bar data={data} />
    </div>
  );
};

export default BarGraph;