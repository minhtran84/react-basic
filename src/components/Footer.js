import React from 'react';
import '../styles/Footer-Dark.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//import which icons to be used 
import { faPhoneSquare, faPhoneVolume, faEnvelope } from '@fortawesome/free-solid-svg-icons';

class Footer extends React.Component {

    render() {
        return (
            <div className="footer-dark">
                <footer>
                    <div class="container">
                        <div class="row">
                            <div class="col-6 item">
                                <h3>Liên hệ</h3>
                                <ul class="text-left">
                                    <li><FontAwesomeIcon icon={faPhoneSquare} /><a target="_blank">&nbsp;Bộ phận tiếp nhận &amp; trả kết quả:&nbsp;0299 3879789 - 0299 3889789</a></li>
                                    <li><FontAwesomeIcon icon={faPhoneVolume} /><a>&nbsp;Đường dây nóng phản ánh, kiến nghị:&nbsp;0299 3899789</a></li>
                                    <li><FontAwesomeIcon icon={faEnvelope} /><a>&nbsp;trungtampvhcc-soctrang@chinhphu.vn</a></li>
                                </ul>
                            </div>
                        </div>
                        <p class="copyright">Trung tâm Phục vụ hành chính công tỉnh Sóc Trăng © 2020</p>
                    </div>
                </footer>
          </div>
        );
    }
}

export default Footer;