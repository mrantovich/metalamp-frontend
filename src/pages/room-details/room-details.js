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
import Swiper from 'swiper';

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

import varExports from '../../main/_export.scss';

let chartCanvas = document.querySelector('.room-details__chart');

if (chartCanvas) {
    let chartNode = document.querySelector('.room-details__chart').getContext('2d');

    // Create linear gradients for different states on chart.
    let backgroundGreatGradient = chartNode.createLinearGradient(0, 0, 0, 400);
    backgroundGreatGradient.addColorStop(0, varExports.goldColor);
    backgroundGreatGradient.addColorStop(1, varExports.goldColorSecond);

    let backgroundGoodGradient = chartNode.createLinearGradient(0, 0, 0, 400);
    backgroundGoodGradient.addColorStop(0, varExports.greenColor);
    backgroundGoodGradient.addColorStop(1, varExports.greenColorSecond);

    let backgroundNormalGradient = chartNode.createLinearGradient(0, 0, 0, 400);
    backgroundNormalGradient.addColorStop(0, varExports.purpleColor);
    backgroundNormalGradient.addColorStop(1, varExports.purpleColorSecond);

    let backgroundDisappointedGradient = chartNode.createLinearGradient(0, 0, 0, 400);
    backgroundDisappointedGradient.addColorStop(0, varExports.dimColor);
    backgroundDisappointedGradient.addColorStop(1, varExports.dimColorSecond);

    // Values for drawing chart.
    let chartData = {
        disappointed: 0,
        normal: 65,
        good: 65,
        great: 130
    };

    const data = {
        labels: [
            '??????????????????????',
            '??????????????????????????????????',
            '????????????',
            '??????????????????????',
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

    let text = chartData.disappointed + chartData.normal + chartData.good + chartData.great;

    const innerChartText = {
        fillStyle: varExports.purpleColor,
        fontMainText: `bold 2.4rem ${varExports.montserratFont}`,
        fontSubText: `bold 1.4rem ${varExports.montserratFont}`,
        theText: text
    };

    const fillTextPlugin = {
        id: 'fill-text-plugin',
        /* afterDraw: function(chart, option) {
            let theCenterText = innerChartText.theText;
            let theCenterSubText = '??????????????';
            const canvasBounds = chartCanvas.getBoundingClientRect();
            chart.ctx.textBaseline = 'middle';
            chart.ctx.textAlign = 'center';
            chart.ctx.fillStyle = innerChartText.fillStyle;
            chart.ctx.font = innerChartText.fontMainText;
            chart.ctx.fillText(theCenterText, canvasBounds.width * 0.23, canvasBounds.height * 0.43);
            chart.ctx.font = innerChartText.fontSubText;
            chart.ctx.fillText(theCenterSubText, canvasBounds.width * 0.23, canvasBounds.height * 0.60);
        }, */
        afterRender: function(chart, option) {
            let theCenterText = innerChartText.theText;
            let theCenterSubText = '??????????????';
            const canvasBounds = chartCanvas.getBoundingClientRect();
            chart.ctx.textBaseline = 'middle';
            chart.ctx.textAlign = 'center';
            chart.ctx.fillStyle = innerChartText.fillStyle;
            chart.ctx.font = innerChartText.fontMainText;
            chart.ctx.fillText(theCenterText, canvasBounds.width * 0.50, canvasBounds.height * 0.33);
            chart.ctx.font = innerChartText.fontSubText;
            chart.ctx.fillText(theCenterSubText, canvasBounds.width * 0.50, canvasBounds.height * 0.43);
        },
        afterUpdate: function(chart, args, options) {
            let theCenterText = innerChartText.theText;
            let theCenterSubText = '??????????????';
            const canvasBounds = chartCanvas.getBoundingClientRect();
            chart.ctx.textBaseline = 'middle';
            chart.ctx.textAlign = 'center';
            chart.ctx.fillStyle = innerChartText.fillStyle;
            chart.ctx.font = innerChartText.fontMainText;
            chart.ctx.fillText(theCenterText, canvasBounds.width * 0.30, canvasBounds.height * 0.33);
            chart.ctx.font = innerChartText.fontSubText;
            chart.ctx.fillText(theCenterSubText, canvasBounds.width * 0.30, canvasBounds.height * 0.43);
        }
    };

    let roomChart = new Chart(chartNode, {
        type: 'doughnut',
        data: data,
        options: {
            plugins: {
                legend: {
                    align: 'end',
                    position: 'right',
                    reverse: true,
                    maxWidth: 200,
                    labels : {
                        padding: 11,
                        boxWidth: 9,
                        boxHeight: 9,
                        usePointStyle: true,
                        pointStyle: 'circle',
                        font: {
                            family: varExports.montserratFont,
                            size: 14,
                        }
                    }
                }
            },
            layout: {
                padding: -10
            },
            cutout: 54,
            responsive: true,
            maintainAspectRatio: false,
        },
        plugins: [fillTextPlugin]
    });

    const mediaQueryList = window.matchMedia(`(max-width: ${varExports.mqMobileLarge}`);
    mediaQueryList.addEventListener('change', handleMediaChange);
    handleMediaChange(mediaQueryList);

    function handleMediaChange(mql) {
        let gswp;
        let gallerySwiperContainer = document.querySelector('.room-details__gallery-grid');
        if (mql.matches) {

            gallerySwiperContainer.classList.add('swiper-container');
            
            changeGalleryGridContent(gallerySwiperContainer, true);

            roomChart.options.plugins.legend.align = 'center';
            roomChart.options.plugins.legend.position = 'bottom';
            roomChart.update(true);

            enableSwiper(gallerySwiperContainer);
        } else {
            gallerySwiperContainer.classList.remove('swiper-container');

            roomChart.options.plugins.legend.align = 'end';
            roomChart.options.plugins.legend.position = 'right';
            roomChart.update(false);

            changeGalleryGridContent(gallerySwiperContainer, false);
            if (gswp !== undefined) gswp.destroy(true, true);
        };

        function enableSwiper(gallery) {
            gswp = new Swiper(gallery, {
                loop: true,
                pagination: {
                    el: '.swiper-pagination'
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            });
        };

        function changeGalleryGridContent(gallery, isContentWrapped) {
            let gallerySlides = gallery.querySelectorAll('.room-details__gallery-item');
            let slides = [];
            for (let i = 0; i < gallerySlides.length; i++) {
                let slide = gallerySlides[i];

                if (isContentWrapped) {
                    slide.classList.add('swiper-slide');
                } else {
                    slide.classList.remove('swiper-slide');
                    slide.style.width = 'auto';
                };

                slides.push(slide.outerHTML);
            };

            let slidesHtmlContent = slides.join('');

            let galleryContent;
            if (isContentWrapped) {
                galleryContent = `<div class="swiper-wrapper">${slidesHtmlContent}</div>
                                    <div class="swiper-pagination"></div>
                                    <div class="swiper-button-prev"></div>
                                    <div class="swiper-button-next"></div>`;
            } else {
                galleryContent = `${slidesHtmlContent}`;
            };

            gallery.innerHTML = galleryContent;
        }
    };
}

