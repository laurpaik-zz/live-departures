import React, { Component } from 'react'
import Departure from './Departure'

class Departures extends Component {
  render() {
    let departures
    if (this.props.departures) {
      departures = this.props.departures.map(departure => {
        return (
          <Departure key={departure.destination} departure={departure} />
        )
      })
    }

    return (
      <table className="departures">
        <thead>
          <tr>
            <th>TimeStamp</th>
            <th>Origin</th>
            <th>Trip</th>
            <th>Destination</th>
            <th>Trip</th>
            <th>ScheduledTime</th>
            <th>Lateness</th>
            <th>Track</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {departures}
        </tbody>
      </table>
    )
  }
}

export default Departures
