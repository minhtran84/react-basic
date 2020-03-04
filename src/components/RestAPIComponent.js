import React from 'react';

class RestAPIComponent extends React.Component {

    constructor() {

        //store the output from API call
        this.state = {

        }
    }

    componentDidMount() {
        fetch(url)
            .then(res => res.json())
            .then((data) => {
                this.setState( {} )
            })
            .catch(console.log)
    }

    render() {
        return(
            <div />
        );
    }
}

export default RestAPIComponent;