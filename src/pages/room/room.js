import 'chart.js';

import {
    Chart,
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle
    } from 'chart.js';

    Chart.register(
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle
    );

import varExport from '../../main/_export.scss';
console.log(varExport)

let chartNode = document.querySelector('.room-details__chart');

const data = {
    labels: [
        'Великолепно',
        'Хорошо',
        'Удовлетворительно'
        ],
        datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
            varExport.chartBackgroundGreat,
            varExport.chartBackgroundGood,
            varExport.chartBackgroundNormal
        ],
        hoverOffset: 4
        }]
};

let roomChart = new Chart(chartNode, {
    type: 'doughnut',
    data: data,
    options: {
        plugins: {
            legend: {
                position: 'right',
                labels : {
                    boxWidth: 10,
                    boxHeight: 10,
                    usePointStyle: true,
                    pointStyle: 'circle'
                }
            }
        },
        cutout: 65,
        aspectRatio: 2,
        maintainAspectRatio: false,
        responsive: false
    }
});