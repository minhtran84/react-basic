import React from 'react';
import './App.css';

import Navigation from './components/Navigation';
import SimpleCard from './components/SimpleCard';

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

      </div>//end div app
    );
  }
}

export default App;
