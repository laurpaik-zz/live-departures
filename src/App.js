import React, { Component } from 'react'
import Departures from './components/Departures'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      departures: []
    }
  }

  getDepartures() {
    this.setState({departures: [
      {
        carrier: 'Amtrak',
        destination: 'Portland, ME',
        status: 'On Time'
      },
      {
        carrier: 'Amtrak',
        destination: 'Providence, RI',
        status: 'On Time'
      },
    ]})
  }

  componentWillMount() {
    this.getDepartures()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Live Departures</h1>
        </header>
        <Departures departures={this.state.departures}/>
      </div>
    );
  }
}

export default App;
