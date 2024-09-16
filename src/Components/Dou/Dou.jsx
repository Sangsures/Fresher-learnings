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
                datasets: [{
                    data: [25,20],
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)'
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
