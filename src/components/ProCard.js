import React from 'react';
import "../styles/procard.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//import which icons to be used 
import { faCircle } from '@fortawesome/free-solid-svg-icons';

class ProCard extends React.Component {

    //conditional render; dynamically rendering the Card Footer only
    renderSwitch(param) {
        switch(param) {
            case 'tinhhinhxl':
                return (
                    <div class="row">
                        <div class="col">
                            <div class="row text-center justify-content-center">
                                <div class="col text-right align-self-center p-1"><FontAwesomeIcon icon={faCircle} className="procard_body_icon_truochan" /></div>
                                <div class="col text-left align-self-center p-1"><label class="col-form-label">25%</label></div>
                            </div><label>Trước hạn</label>
                        </div>
                        <div class="col">
                            <div class="row text-center justify-content-center">
                                <div class="col text-right align-self-center p-1"><FontAwesomeIcon icon={faCircle} className="procard_body_icon_dunghan" /></div>
                                <div class="col text-left align-self-center p-1"><label class="col-form-label">95%</label></div>
                            </div>
                            <label>Đúng hạn</label>
                        </div>
                        <div class="col">
                            <div class="row text-center justify-content-center">
                                <div class="col text-right align-self-center p-1"><FontAwesomeIcon icon={faCircle} className="procard_body_icon_trehan" /></div>
                                <div class="col text-left align-self-center p-1"><label class="col-form-label">2%</label></div>
                            </div>
                            <label>Trễ hạn</label>
                        </div>
                    </div>
                );
            case 'hstructuyen':
                return (
                    <div class="row">
                        <div class="col">
                            <div class="row text-center justify-content-center">
                                <div class="col text-right align-self-center p-1"><FontAwesomeIcon icon={faCircle} className="procard_body_icon_mucdo3" /></div>
                                <div class="col text-left align-self-center p-1"><label class="col-form-label">85%</label></div>
                            </div>
                            <label>Mức độ 3</label>
                        </div>
                        <div class="col">
                            <div class="row text-center justify-content-center">
                                <div class="col text-right align-self-center p-1"><FontAwesomeIcon icon={faCircle} className="procard_body_icon_mucdo4" /></div>
                                <div class="col text-left align-self-center p-1"><label class="col-form-label">15%</label></div>
                            </div>
                            <label>Mức độ 4</label>
                        </div>
                    </div>        
                );
            default:
                return null;
        }
    }

    render() {
        return (
            <div class="card" className="procard">
                <div class="card-header">
                    <h4 className="procard_header">{this.props.header}</h4>
                </div>
                <div class="card-body text-center">
                    <h1 class="text-center card-title">{this.props.number}</h1>
                    <h6 class="text-center text-muted card-subtitle mb-2">Đã tiếp nhận</h6>
                </div>
                <div class="card-footer">
                    { this.renderSwitch(this.props.cardType) }
                </div>
            </div>
        );
    }
}

export default ProCard;