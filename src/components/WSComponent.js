import React from 'react';

class WSComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            text: ''
        }
    }

    componentDidMount() {
        
        let magic_proxy = 'https://cors-anywhere.herokuapp.com/';

        let url = 'http://motcua.soctrang.gov.vn/cgate-congchung-portlet/services/selectData/layDanhSachDonVi';

        fetch
        (   magic_proxy+url, 
                {
                    //mode: 'no-cors',
                    headers: {
                        'Accept': 'application/xml',
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
                    }
                }
        )
        .then(response => response.text())
        .then((response) => {
            console.log(response)
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div>


            </div>
        );
    }
}

export default WSComponent;