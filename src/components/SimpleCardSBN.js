import React from 'react';
import "../styles/simplecard.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//import which icons to be used 
import { faBuilding } from '@fortawesome/free-regular-svg-icons';

class SimpleCardSBN extends React.Component {

    render() {
        return (
            <div class="card" className="simplecard">
                <div class="card-header">
                    <h4 className="simplecard_header">Sở ngành</h4>
                </div>
                <div class="card-body">
                    <FontAwesomeIcon icon={faBuilding} className="simplecard_body_icon_sbn" />
                    <h2>17</h2>
                </div>
            </div>
        );
    }
}

export default SimpleCardSBN;