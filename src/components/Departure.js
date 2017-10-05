import React, { Component } from 'react';

class Departure extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.departure.carrier}</td>
        <td>{this.props.departure.destination}</td>
        <td>{this.props.departure.status}</td>
      </tr>
    )
  }
}

export default Departure;
