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

import colors from '../../main/colors.scss';

let roomChart = document.querySelector('.room-details__chart');

const data = {
    labels: [
        'Red',
        'Blue',
        'Yellow'
        ],
        datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
            colors.chartBackgroundGreat,
            colors.chartBackgroundGood,
            colors.chartBackgroundDisappointed
        ],
        hoverOffset: 4
        }]
    };
    
let roomChartEl = new Chart(roomChart, {
    type: 'doughnut',
    data: data
});