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
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

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
    aspectRatio: 1.5, 
    plugins: {
        legend: {
            display: false
        },
        tooltip: {
            enabled: false
        }
    },
    scales: {
        x: {
            grid: {
                display: false
            },
            ticks: {
                display: true
            }
        },
        y: {
            beginAtZero: true,
            ticks: {
                display: true,
                stepSize: 3000,
                max: 12000,
            },
            grid: {
                display: true
            }
        },
    },
    barThickness: 25,
};

const upsizeData = {
    labels: ['AWS', 'Azure'],
    datasets: [
        {
            label: 'Upsize',
            data: [0, 0],
            backgroundColor: 'rgba(156, 163, 175, 0.5)', 
        },
    ],
};

const downsizeData = {
    labels: ['AWS', 'Azure'],
    datasets: [
        {
            label: 'Downsize',
            data: [12000, 3000],
            backgroundColor: 'rgba(156, 163, 175, 0.5)', 
        },
    ],
};

const Rightsizing = () => {
    return (
        <div className="p-6 rounded-lg shadow-md max-w-lg mx-auto">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-700">Rightsizing</h2>
                <span className="text-3xl font-bold text-gray-700">10</span>
            </div>
            <div className="flex justify-between mb-4">
                <div className="flex items-center text-gray-500">
                    <FaArrowUp className="text-red-500 mr-2" />
                    <span>Upsize</span>
                </div>
                <div className="flex items-center text-gray-500">
                    <FaArrowDown className="text-green-500 mr-2" />
                    <span>Downsize</span>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className=" h-40">
                    <Bar options={options} data={upsizeData} />
                </div>
                <div className=" h-40">
                    <Bar options={options} data={downsizeData} />
                </div>
            </div>
        </div>
    );
};

export default Rightsizing;
