import React from 'react';
import "../styles/simplecard.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//import which icons to be used 
import { faFileAlt } from '@fortawesome/free-regular-svg-icons';

class SimpleCard extends React.Component {

    render() {
        return (
            <div class="card" className="simplecard">
                <div class="card-header">
                    <h4 className="simplecard_header">Tổng số TTHC</h4>
                </div>
                <div class="card-body">
                    <FontAwesomeIcon icon={faFileAlt} className="simplecard_body_icon" />
                    <h2>1089</h2>
                </div>
            </div>
        );
    }
}

export default SimpleCard;