import React, { Component } from 'react';
import Chart from 'chart.js';

class MyChart extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: this.props.data
        };

        this.renderChart = this.renderChart.bind(this);

        this._chart = null;
    }

    componentDidMount() {
        this.renderChart();
    }

    componentWillReceiveProps(props) {
        this.setState({
            data: props.data
        });
        this.renderChart();
    }

    renderChart() {
        this._chart = new Chart(this.refs.chart, {
            type: 'bar',
            data: {
                labels: [1,2,3,4,5,6,7],
                datasets: [{
                    label: 'Amount of Rainfall',
                    data: this.state.data,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    xAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'days'
                        }
                    }],
                    yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'l/m²'
                        },
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        });
    }

    render() {
        return (
            <canvas ref="chart" width="400" height="400"/>
        );
    }
}

export default MyChart;