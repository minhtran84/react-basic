import React from 'react';
import '../styles/chartcard.css';

class ChartCard extends React.Component {

    render() {
        return (
            <div class="card" className="chartcard">
                <div class="card-header">
                    <h4 className="chartcard_header">{this.props.header}</h4>
                </div>
                <div class="card-body">
                    <div><canvas height="408" width="816" className="chartcard_body"></canvas></div>
                </div>
            </div>
        );
    }
}

export default ChartCard;