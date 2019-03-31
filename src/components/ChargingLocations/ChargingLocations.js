import React, { Component } from 'react'
import './ChargingLocations.css';

import ChargingCard from './ChargingCard/ChargingCard';

class ChargingLocations extends Component {
  handleClick = (data) => {
    this.props.handleClick(data);
  }

  render() {
    const stations = this.props.stations.map((station, index) => {
      return <ChargingCard key={station.UUID} station={station} handleClick={() => this.handleClick(index)}/>;
    });

    return (
      <div className="ChargingLocations" id="scroll-style">
        {this.props.stations && stations}
      </div>
    )
  }
}

export default ChargingLocations;