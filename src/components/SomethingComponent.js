import React from 'react';

class SomethingComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: 'abc'
        }
    }

    componentDidMount() {

        if (this.state.text.length > 0) {
            let message = 'let message'
            var msg = 'var message'

        }

        //console.log(message) //this will be error because let has block scope (here is IF block)
        console.log(msg) //This is ok because var has function scope (here is the componentDidMount function)
    }

    render() {
        return (
            <h5>Understanding Let, Const and Var</h5>
        );
    }
}

export default SomethingComponent;