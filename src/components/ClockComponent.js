import React from 'react';

class ClockComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            something: ''
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), //define the function below
            30000
        );
    }

    componentWillMount() {
        clearInterval(this.timerID);
    }

    //Function will be called on every interval
    tick() {
        
        //Call setState() to update data realtime
        this.setState({
            something: 'something new'
        });
    }

    render() {
        return (
            <div>{this.state.something}</div>
        );
    }
}

export default ClockComponent;
