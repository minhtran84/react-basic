import React from 'react';

class RestAPIComponent extends React.Component {

    // constructor() {

    //     //store the output from API call
    //     // this.state = {

    //     // }
    // }

    componentDidMount() {

        let url = 'http://motcua.soctrang.gov.vn/cgate-congchung-portlet/services/selectData/layDanhSachDonVi'

        fetch(url, { 
            mode: 'no-cors',
            method: 'get',
            headers: {  "Content-Type": "application/json" }            
        }).then(res => res.json())
            .then((data) => {
                //this.setState( {} )
            })
            .catch(console.log);
    }

    render() {
        return(
            <div />
        );
    }
}

export default RestAPIComponent;