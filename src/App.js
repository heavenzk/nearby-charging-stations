import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import axios from 'axios';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Map from './components/Map/Map';
import LocationDetails from './components/LocationDetails/LocationDetails';

class App extends Component {
  state = {
    stations: [],
    currentLocation: {},
    showModal: false,
    selected: null
  }

  getStations = () => {
    const maxResults = 20;
    const distance = 10;
    const distanceUnit = 'KM';

    axios.get(`https://api.openchargemap.io/v3/poi/?output=json&latitude=${this.state.currentLocation.latitude}&longitude=${this.state.currentLocation.longitude}&distance=${distance}&distanceunit=${distanceUnit}&maxresults=${maxResults}`)
      .then(response => {
        this.setState(() => ({stations: response.data}));
      })
      .catch(error => console.log(error));
  }

  getCurrentLocation = (location) => {
    this.setState(() => ({currentLocation: location}));
    this.getStations();
  }

  triggerModal = (index) => {
    const stations = this.state.stations.slice();
    const selected = stations[index];
    this.setState(() => ({ showModal: true, selected }));
  }

  toggle = () => {
    this.setState((prevState) => ({showModal: !prevState.showModal}));
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Row className="m-0 main">
          <Col className="p-0" md="3"><Sidebar stations={this.state.stations} handleClick={this.triggerModal}/></Col>
          <Col className="p-0" xs="12" md="9"><Map getCurrentLocation={this.getCurrentLocation} currentLocation={this.state.currentLocation} stations={this.state.stations} /></Col>
        </Row>
        <LocationDetails show={this.state.showModal} toggle={this.toggle} selected={this.state.selected} />
      </div>
    );
  }
}

export default App;
