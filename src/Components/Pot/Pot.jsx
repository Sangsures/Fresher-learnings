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
            label: 'Azure',
            data: [250, 120, 200],
            backgroundColor: [
                'rgba(33, 99, 12, 0.8)',  
                'rgba(545, 123, 299, 0.12)',  
                'rgba(75, 122, 135, 0.78)' 
            ],
            barThickness: 50, 
        },
    ],
};

const SpendForecast = () => {
    return (
        <div className="">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700"></h2>
            <div className="h-[300px]">
                <Bar options={options} data={azureData} />
            </div>
        </div>
    );
};

export default SpendForecast;
