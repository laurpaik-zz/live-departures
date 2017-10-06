import React, { Component } from 'react';

class Departure extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.departure.timestamp}</td>
        <td>{this.props.departure.origin}</td>
        <td>{this.props.departure.trip}</td>
        <td>{this.props.departure.destination}</td>
        <td>{this.props.departure.scheduledtime}</td>
        <td>{this.props.departure.lateness}</td>
        <td>{this.props.departure.track}</td>
        <td>{this.props.departure.status}</td>
      </tr>
    )
  }
}

export default Departure;
