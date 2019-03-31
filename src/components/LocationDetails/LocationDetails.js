import React, { Component } from 'react';
import { Card, CardBody, CardHeader, CardText, Modal, ModalHeader, ModalBody } from 'reactstrap';
import './LocationDetails.css';

class LocationDetails extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.props.toggle();
  }

  render() {
    let modal = null;
    if (this.props.selected) {
      const { selected } = this.props;
      modal = (
        <Modal isOpen={this.props.show} fade toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>{selected.AddressInfo.Title}</ModalHeader>
          <ModalBody>
            <Card className="ModalCard">
              <CardHeader>Location Details</CardHeader>
              <CardBody>
                <CardText>{selected.AddressInfo.AddressLine1}</CardText>
                <CardText>{selected.AddressInfo.Postcode} </CardText>
                <CardText>{selected.AddressInfo.StateOrProvince} </CardText>
                <CardText>{selected.AddressInfo.Country.Title} </CardText>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>Equipment Details</CardHeader>
              <CardBody>
                <CardText>Numbers of stations: {selected.Connections.length}</CardText>
                {
                  selected.Connections.map((connection, index) => {
                    return (
                      <div key={index}>
                        <CardText className="font-weight-bold">{connection.ConnectionType.Title}</CardText>
                        <div className="d-flex justify-content-between">
                          <CardText>{connection.Amps}A</CardText>
                          <CardText>{connection.Voltage}V</CardText>
                          <CardText>{connection.CurrentType.Title}</CardText>
                        </div>
                      </div>
                    );
                  })
                }
              </CardBody>
            </Card>
          </ModalBody>
        </Modal>
      );
    }
    return (
      modal
    );
  }
}

export default LocationDetails;