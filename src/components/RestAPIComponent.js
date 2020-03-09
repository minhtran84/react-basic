import React from 'react';

class RestAPIComponent extends React.Component {

    constructor(props) {
        super(props);
        //store the output from API call
        this.state = {
            error: null,
            isLoaded: false,
            text: '',
            items: []
        }
    }

    componentDidMount() {

        let magic_proxy = 'https://cors-anywhere.herokuapp.com/';

        let url = 'http://motcua.soctrang.gov.vn/cgate-congchung-portlet/services/selectData/layDanhSachDonVi'

        //let sampleURL = 'http://dummy.restapiexample.com/api/v1/employees';

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

        fetch( magic_proxy + url )
            .then(res => res.text())
            .then(
                (text) => {            
                    this.setState({
                        isLoaded: true,
                        items: JSON.parse(text.substring(76, text.length - 42))
                        //text: text.substring(76, text.length - 42),                                         
                    });
                },                
                    (error) => {
                    this.setState({
                        isLoaded: true,
                        error: 'something wrong'
                    });
                }
            )
    }

    render() {

        const { error, isLoaded, items } = this.state;

        if (error) {
            return <div>Error: {error}</div>;
        }
        else if (!isLoaded) {
            return <div>Loading...</div>;
        }
        else {
            return(
                <div>
                    <h5>Testing REST API consuming...</h5>                    
                    <ul>
                        {items.map(item => (
                            <li key={item.dv_id}>
                                {item.dv_ten}
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }        
    }
}

export default RestAPIComponent;