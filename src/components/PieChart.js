import React from 'react';
import {Pie} from 'react-chartjs-2';

class PieChartComponent extends React.Component {

    constructor(props) {
        super(props);        
    }

    render() {
        return (
            <div>
                <Pie 
                    data={{
                        labels: this.props.labels,
                        datasets: this.props.datasets
                    }} 
                />
            </div>
        );
    }
}

export default PieChartComponent;