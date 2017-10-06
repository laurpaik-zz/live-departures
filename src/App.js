import React, { Component } from 'react'
import Departures from './components/Departures'
// import Papa from 'papaparse'
import $ from 'jquery'
import './App.css'
import './Departures.csv'

const csvJSON = function (csv){
  let lines=csv.split("\n");
  let result = [];
  let headers=lines[0].split(",");
  for(let i=1;i<lines.length;i++){
    let obj = {};
    let currentline=lines[i].split(",");
    for(let j=0;j<headers.length;j++){
      obj[headers[j]] = currentline[j];
    }
    result.push(obj);
  }
  //return result; //JavaScript object
  return JSON.stringify(result); //JSON
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      departures: []
    }
  }

  getDepartures() {
    $.ajax({
      url: 'http://developer.mbta.com/lib/gtrtfs/Departures.csv',
      crossDomain: true,
      success: function(data) {
        this.setState({departures: csvJSON(data)}, function () {
          console.log(this.state)
        })
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(err)
      }
    })
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
