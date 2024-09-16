import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const Doughnut = () => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }
        const myChartRef = chartRef.current.getContext("2d");

        chartInstance.current = new Chart(myChartRef, {
            type: 'doughnut',
            data: {
                labels: ['Amazon EC2 - $3000', 'Tax - $500', 'AmazonRDS - $11000','Amazon CloudWatch - $4500','AmazonS3 - $2500'],
                datasets: [{
                    data: [25,20,30,15,10],
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)',
                        'rgb(78, 20, 32)',
                        'rgb(201, 203, 205)'
                    ],
                }],
            },
            options: {
                plugins: {
                    legend: {
                        position: 'right', // Position the legend on the right
                        align: 'right',    // Align legend items to the right
                        labels: {
                            padding: 15,   // Add some padding if needed
                        },
                    },
                },
                responsive: true,
                maintainAspectRatio: false,
            },
        });

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, []);

    return (
        // <div style = {{ width : "200px" , heigth : "200px"}} >
             <canvas ref={chartRef} style={{ width: "150px", height: "150px" }} />
        // </div>
    );
};

export default Doughnut;
