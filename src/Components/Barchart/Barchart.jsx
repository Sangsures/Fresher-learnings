import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'bottom'
        },
        title: {
            display: false
        }
    },
    scales: {
        x: {
            grid: {
                display: false,
            },
            ticks: {
                maxRotation: 0,
                minRotation: 0,
                padding: 10,
            }
        },
        y: {
            beginAtZero: true,
            ticks: {
                stepSize: 50,
            },
            min: 0,
            max: 300,
        },
    },
    layout: {
        padding: {
            left: 10,
            right: 10,
            top: 10,
            bottom: 10,
        }
    },
    barThickness: 50,  // Controls the thickness of the bars
};

const azureData = {
    labels: ['Last Month', 'MTD Cost', 'Forecast'],
    datasets: [
        {
            label: 'AWS',
            data: [250, 120, 200],
            backgroundColor: [
                'rgba(255, 99, 132, 0.8)',  
                'rgba(54, 162, 235, 0.8)', 
                'rgba(75, 192, 192, 0.8)' 
            ],
            barThickness: 50, 
        },
    ],
};

const SpendForecast = () => {
    return (
        <div className="">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700"></h2>
            <div className="h-[300px] ">
                <Bar options={options} data={azureData} />
            </div>
        </div>
    );
};

export default SpendForecast;
