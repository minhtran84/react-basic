import React from 'react';

class RestAPIComponent extends React.Component {

    constructor(props) {
        super(props);
        //store the output from API call
        this.state = {
            error: null,
            isLoaded: false,
            status: null,
            items: []
        }
    }

    componentDidMount() {

        //let url = 'http://motcua.soctrang.gov.vn/cgate-congchung-portlet/services/selectData/layDanhSachDonVi'

        let sampleURL = 'http://dummy.restapiexample.com/api/v1/employees';

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

        fetch(sampleURL, { mode: 'no-cors' } )
            .then(res => res.json())
            .then(
                (result) => {                    
                    this.setState({
                        isLoaded: true,
                        status: result.status,
                        items: result.data
                    });
                },                
                    (error) => {
                    this.setState({
                        error: 'loi xay ra'
                    });
                }
            )
    }

    render() {
        return(
            <div>
                <h5>Testing REST API consuming...</h5>
                <h5>{ this.state.status }</h5>
                <h5>{ this.state.error }</h5>
            </div>
        );
    }
}

export default RestAPIComponent;