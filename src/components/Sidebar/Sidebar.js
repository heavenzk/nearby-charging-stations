import React, { Component } from 'react'
import './Sidebar.css';

import ChargingLocations from '../ChargingLocations/ChargingLocations';

class Sidebar extends Component {
  handleClick = (data) => {
    this.props.handleClick(data);
  }

  render() {
    return (
      <div className="Sidebar">
        <ChargingLocations stations={this.props.stations} handleClick={this.handleClick}/>
      </div>
    )
  }
}

export default Sidebar;