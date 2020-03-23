import React from 'react';
import './App.css';

import Navigation from './components/Navigation';
import SimpleCard from './components/SimpleCard';
import ProCard from './components/ProCard';
import ChartCard from './components/ChartCard';
import Footer from './components/Footer';

//import PieChart from './components/ChartComponent';
//import Clock from './components/ClockComponent';
//import WebService from './components/WebServiceComponent';
//import WS from './components/WSComponent';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <Navigation />

        <div>{/* start First Row  */}
            <div class="container mt-3 mb-3">
                <div class="row">
                    <div class="col-md-4">
                        <SimpleCard header="Tổng số TTHC" number="1089" icon="faFileAlt"/>
                    </div>
                    <div class="col-md-4">
                        <SimpleCard header="Sở ngành" number="17" icon="faBuilding"/>
                    </div>
                    <div class="col-md-4">
                        <SimpleCard header="Quầy giao dịch" number="23" icon="faDesktop"/>
                    </div>
                </div>
            </div>
        </div>{/* end First Row  */}

        <div>{/* start Second Row  */}
            <div class="container mb-3">
                <div class="row">
                    <div class="col-md-6">
                        <ProCard header="Tình hình xử lý HS" number="11725" cardType="tinhhinhxl" />
                    </div>
                    <div class="col-md-6">
                        <ProCard header="HS trực tuyến" number="5734" cardType="hstructuyen" />
                    </div>
                </div>
            </div>
        </div>{/* end Second Row */}

        <div>{/* start Third Row  */}
          <div class="container mb-3">
            <div class="row">
                <div class="col-md-6">
                    <ChartCard header="Mức độ hài lòng" />
                </div>
                <div class="col-md-6">
                    <ChartCard header="Hồ sơ trực tuyến" />
                </div>
            </div>
          </div>
        </div>{/* end Third Row */}

        <Footer />

      </div>//end div app
    );
  }
}

export default App;
