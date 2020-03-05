import React from 'react';

class RestAPIComponent extends React.Component {

    constructor(props) {
        super(props);
        //store the output from API call
        this.state = {
            items: []
        }
    }

    componentDidMount() {

        let url = 'http://motcua.soctrang.gov.vn/cgate-congchung-portlet/services/selectData/layDanhSachDonVi'

        // fetch(url, { 
        //     mode: 'no-cors',
        //     method: 'get',
        //     headers: {  "Content-Type": "application/json" }            
        // }).then(res => res.json())
        //     .then((result) => {
        //         this.setState({
        //             items: result.items
        //         })
        //     })
        //     .catch(console.log);

        fetch(url, { mode: 'no-cors' } )
            .then(res => res.json())
            .then(
                (result) => {
                this.setState({
                    isLoaded: true,
                    items: result.items
                });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
                }
            )
    }

    render() {
        return(
            <div />
        );
    }
}

export default RestAPIComponent;