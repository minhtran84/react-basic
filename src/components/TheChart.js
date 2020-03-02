import React from 'react';
import Chart from 'chart.js';

class TheChart extends React.Component {

    constructor(props) {
        super(props);
        this.chartRef = React.createRef();
    }

    componentDidMount() {
        this.myChart = new Chart(this.chartRef.current, {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: this.props.values
                }],                
                labels: this.props.labels
            }
        });
    }

    render() {
        return (
            <canvas ref={this.chartRef} />
        );
    }
}

export default TheChart;