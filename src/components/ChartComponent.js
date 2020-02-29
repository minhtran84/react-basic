import React from 'react';
import {Pie} from 'react-chartjs-2';

class ChartComponent extends React.Component {

    render() {
        return (
            <Pie labels={this.props.labels}  />
        );
    }
}

export default ChartComponent;