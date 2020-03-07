import React from 'react';

class WebServiceComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            text: '',
            items: []
        }
    }

    componentDidMount() {

        //let url = 'http://dummy.restapiexample.com/api/v1/employees';

        let url = 'http://motcua.soctrang.gov.vn/cgate-congchung-portlet/services/selectData/layDanhSachDonVi';

        fetch(url, 
            {
                mode: 'no-cors',
                headers: {
                    'Accept': 'application/xml'
                }
            }
        )
            .then(response => response.text())
            .then((text) => {
                console.log(text);
                this.setState ({
                    error: 'khong co loi',
                    text: text
                });
                
            },
                (error) => {
                    this.setState ({
                        error: 'loi xay ra'
                    });
                }
            )
    }

    render() {
        return (
            <div>
                <h5>Test Web Service consuming</h5>
                <h6>{this.state.error}</h6>
                {/* <h6>{this.state.items}</h6> */}
                <ul>
                    {/* {this.state.items.map(item => (
                        <li key={item.id}>
                        {item.employee_name} {item.employee_age}
                        </li>
                    ))} */}

                    {/* { this.state.items.map(
                        donvi => (
                            <li key={donvi.dv_id}>
                                {donvi.dv_name}
                            </li>
                        ))
                    } */}
                </ul>
            </div>
        );
    }
}

export default WebServiceComponent;