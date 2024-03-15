import React from 'react';
import "../index.css"
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import PieChart from "./pieChart.js";
import BarGraph from "./barGraph.js";

Chart.register(CategoryScale);

export default function UserStats() {
    return(
        <div className="flex">
            <div className='w-1/2 p-4'>
                <PieChart />
            </div>
            <div className='w-1/2 p-4'>
                <BarGraph />
            </div>
        </div>
    );
}