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

import colors from '../../main/_export.scss';

let chartNode = document.querySelector('.room-details__chart').getContext('2d');

// Create linear gradients for different states on chart.
let backgroundGreatGradient = chartNode.createLinearGradient(0, 0, 0, 400);
backgroundGreatGradient.addColorStop(0, colors.goldColor);
backgroundGreatGradient.addColorStop(1, colors.goldColorSecond);

let backgroundGoodGradient = chartNode.createLinearGradient(0, 0, 0, 400);
backgroundGoodGradient.addColorStop(0, colors.greenColor);
backgroundGoodGradient.addColorStop(1, colors.greenColorSecond);

let backgroundNormalGradient = chartNode.createLinearGradient(0, 0, 0, 400);
backgroundNormalGradient.addColorStop(0, colors.purpleColor);
backgroundNormalGradient.addColorStop(1, colors.purpleColorSecond);

let backgroundDisappointedGradient = chartNode.createLinearGradient(0, 0, 0, 400);
backgroundDisappointedGradient.addColorStop(0, colors.dimColor);
backgroundDisappointedGradient.addColorStop(1, colors.dimColorSecond);

// Values for drawing chart.
let chartData = {
    disappointed: 0,
    normal: 65,
    good: 65,
    great: 130
}

const data = {
    labels: [
        'Разочарован',
        'Удовлетворительно',
        'Хорошо',
        'Великолепно',
        ],
        datasets: [{
        data: [chartData.disappointed, chartData.normal, chartData.good, chartData.great],
        backgroundColor: [
            backgroundDisappointedGradient,
            backgroundNormalGradient,
            backgroundGoodGradient,
            backgroundGreatGradient,
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
                reverse: true,
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