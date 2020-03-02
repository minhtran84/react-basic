import React from 'react';
import Chart from 'chart.js';

class ChartComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            chart: null
        }
    }

    chart = React.createRef();

    componentDidMount() {
        let theChart = new Chart(this.chart.current, {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: this.props.chartData,
                    backgroundColor: 'green'
                }],                
                labels: this.props.labels
            }
        });

        this.setState({ chart: theChart })
    }

    componentWillReceiveProps(nextProps, nextContext) {
        //update chart according to prop change
        // this.state.chart.data.datasets.forEach(dataset => {
        //     dataset.data.push(nextProps.chartData);
        // });

        //this.state.chart.update();
    }

    render() {
        return (
            <canvas ref={this.chart} />
        );
    }
}

export default ChartComponent;