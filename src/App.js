import React from 'react';
import './App.css';

import PieChart from './components/ChartComponent';
import Clock from './components/ClockComponent';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Clock />
        </header>
      </div>
    );
  }
}

export default App;
