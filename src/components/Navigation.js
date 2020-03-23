import React from 'react';
// import "../styles/navigation.css";
import "../styles/Navigation-Clean.css";

class Navigation extends React.Component {

    render() {
        return (
            <nav class="navbar navbar-light navbar-expand-md" 
                 className="navigation-clean"
                 style={{
                     "background-color": "rgb(31,30,46)",
                     "color": "rgb(231,231,241)"
                 }}
            >
                <div class="container">
                    <a className="navbar-brand"
                       href="#"
                       style={{
                           "color": "rgb(134,136,151)"
                       }}
                    >
                        Trung tâm Phục vụ hành chính công tỉnh Sóc Trăng</a>                    
                </div>
            </nav>
        );
    }
}

export default Navigation;