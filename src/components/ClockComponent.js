import React from 'react';

class ClockComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            totalHSdatiepnhan: 100
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), 1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        let oldVal = this.state.totalHSdatiepnhan;
        this.setState({
            totalHSdatiepnhan: oldVal + 100
        });
    }

    render() {
        return (
        <h5>Tong HS da tiep nhan: {this.state.totalHSdatiepnhan}</h5> 
        );
    }
}

export default ClockComponent;