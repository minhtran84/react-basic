import React from 'react';

//if the proxy is defined with 'var/const' here (outside any function), 
//then it's accessible anywhere OR Global scope
//var magic_proxy = 'https://cors-anywhere.herokuapp.com/';

const magic_proxy = 'https://cors-anywhere.herokuapp.com/'; //this value will not be changed

class RestAPIComponent extends React.Component {

    constructor(props) {
        super(props);        

        //store the output from API call
        this.state = {
            error: null,
            isLoaded: false,
            text: '',
            item: {},
            items: []
        }
    }

    componentDidMount() {
        
        //let url = 'http://motcua.soctrang.gov.vn/cgate-congchung-portlet/services/selectData/layDanhSachDonVi'        

        let year = 2020

        let companyid = 9 //So Cong thuong

        let url_thongke = 'http://motcua.soctrang.gov.vn/cgate-congchung-portlet/services/selectData/getThongKe' + '?nam=' + year + '&companyid=' + companyid         

        fetch( magic_proxy + url_thongke )
            .then(res => res.text())
            .then(
                (text) => {            
                    this.setState({
                        isLoaded: true,
                        //items: JSON.parse(text.substring(76, text.length - 42))
                        item: JSON.parse(text.substring(text.indexOf('<ns:return>') + 11, text.indexOf('</ns:return>'))),
                        text: text.substring(text.indexOf('<ns:return>') + 11, text.indexOf('</ns:return>'))                                        
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

        const { error, isLoaded, item, items } = this.state;

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
                        {/* {items.map(item => (
                            <li key={item.dv_id}>
                                {item.dv_ten}
                            </li>
                        ))} */}
                    </ul>
                    <h6>Tong tiep nhan: {item.tongtiepnhan}</h6>
                    <h6>Xu ly dung han: {item.xulydunghan}</h6>
                    <h6>Xu ly tre han: {item.xulytrehan}</h6>
                </div>
            );
        }        
    }
}

export default RestAPIComponent;