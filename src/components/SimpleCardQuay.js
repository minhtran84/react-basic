import React from 'react';
import "../styles/simplecard.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//import which icons to be used 
import { faDesktop } from '@fortawesome/free-solid-svg-icons';

class SimpleCardQuay extends React.Component {

    render() {
        return (
            <div class="card" className="simplecard">
                <div class="card-header">
                    <h4 className="simplecard_header">Quầy giao dịch</h4>
                </div>
                <div class="card-body">
                    <FontAwesomeIcon icon={faDesktop} className="simplecard_body_icon_quay" />
                    <h2>23</h2>
                </div>
            </div>
        );
    }
}

export default SimpleCardQuay;