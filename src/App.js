import React from 'react';
import './App.css';

//import MyChart from './components/TheChart';
//import ChartComponent from './components/ChartComponent';
//import PieChart from './components/PieChart';

import WebService from './components/RestAPIComponent';

import SomethingComponent from './components/SomethingComponent';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {            
      labels: [],
      datasets: []
    }
  }

  componentDidMount() {
    this.setState({        
      labels: ['A', 'B', 'C'],
      datasets: [{
        data: [1000, 2000, 3000],
        backgroundColor: ['orange', 'blue', 'green']
      }]
    });
  }

  render() {

    //const { labels, datasets } =  this.state;

    return (
      <div>

        {/* //pass data kiểu này cũng chạy */}
        {/* <PieChart labels={this.state.labels} datasets={this.state.datasets} /> */}

        {/* <PieChart labels={labels} datasets={datasets} /> */}
        
        <WebService />

        {/* <SomethingComponent /> */}

        {/* <ChartComponent chartData={[123, 456]} labels={this.state.labels} />
        <MyChart values={[123, 456]} labels={labels} /> */}

        {/* <MyChart 
          values={ this.state.values }
          //labels={ [ this.state.labels[0], this.state.labels[1] ] }
          labels={ this.props.labels }
        /> */}
      </div>
    );
  }
}

export default App;
