import React, { Component } from 'react'
import L from 'leaflet';
import './Map.css';

class Map extends Component {
  componentDidMount() {
    // create map
    this.map = L.map('map', {
      zoom: 16,
      layers: [
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }),
      ]
    });

    this.locateUser();


    this.map.on('click', (data) => {
      this.props.getCurrentLocation({ latitude: data.latlng.lat, longitude: data.latlng.lng });
    });


    this.layer = L.layerGroup().addTo(this.map);
    this.updateMarkers(this.props.stations);
  }

  componentDidUpdate({ stations }) {
    

    // check if data has changed
    if (this.props.stations !== stations) {
      this.layer.clearLayers();
      this.updateMarkers(this.props.stations);
    }

    L.marker([this.props.currentLocation.latitude, this.props.currentLocation.longitude], {
      icon: L.divIcon({
        iconSize: [15, 15],
        className: 'pulse'
      })
    }).addTo(this.layer);

  }

  locateUser() {
    this.map.on('locationfound', (data) => {
      this.props.getCurrentLocation({ latitude: data.latitude, longitude: data.longitude });
    });

    this.map.on('locationerror', (error) => {
      console.log(error);
    });

    this.map.locate({
      setView: true,
      maxZoom: 16
    })
  }

  updateMarkers(stations) {
    if (stations) {
      stations.forEach(station => {
        L.marker(
          [station.AddressInfo.Latitude, station.AddressInfo.Longitude],
          { title: station.AddressInfo.Title }
        ).bindPopup(`<h2>${station.AddressInfo.Title}</h2>`).openPopup().addTo(this.layer);
      });
    }
  }

  render() {
    return (
      <div id="map"></div>
    )
  }
}

Map.defaultProps = {
  stations: []
}

export default Map;
