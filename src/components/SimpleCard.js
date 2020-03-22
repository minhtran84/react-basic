import React from 'react';
import "../styles/simplecard.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//import which icons to be used 
import { faFileAlt } from '@fortawesome/free-regular-svg-icons';
import { faBuilding } from '@fortawesome/free-regular-svg-icons';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';

class SimpleCard extends React.Component {

    // constructor(props) {
    //     super(props);
    // }

    //conditional render
    renderSwitch(param) {
        switch(param) {
            case 'faFileAlt':
                return <FontAwesomeIcon icon={faFileAlt} className="simplecard_body_icon" />;
            case 'faBuilding':
                return <FontAwesomeIcon icon={faBuilding} className="simplecard_body_icon_sbn" />;
            case 'faDesktop':
                return <FontAwesomeIcon icon={faDesktop} className="simplecard_body_icon_quay" />;
            default:
                return null;
        }
    }

    render() {
        return (
            <div class="card" className="simplecard">
                <div class="card-header">
                    <h4 className="simplecard_header">{this.props.header}</h4>
                </div>
                <div class="card-body">
                    { this.renderSwitch(this.props.icon) }
                    <h2>{this.props.number}</h2>
                </div>
            </div>
        );
    }
}

export default SimpleCard;