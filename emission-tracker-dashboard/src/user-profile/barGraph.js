import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarGraph = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Sales',
                data: [5, 59, 80, 81, 6, 55],
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
            }
        ]
    };

    return (
        <div>
            <h2>Bar Graph</h2>
            <Bar
                data={data}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: "Carbon Emission this month"
                        }
                    },
                    // maintainAspectRatio: false,
                    width:500,
                    height:3000,
                    responsive: true,
                    // scales: {
                    //     y: {
                    //         beginAtZero: true
                    //     }
                    // }
                }}
            />
        </div>
    );
};

export default BarGraph;