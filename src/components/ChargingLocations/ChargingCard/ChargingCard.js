import React from 'react'
import { Card, CardBody, CardHeader, CardText } from 'reactstrap';
import './ChargingCard.css';

const chargingCard = (props) => {
  return (
    <Card className="ChargingCard" onClick={props.handleClick}>
      <CardHeader className="bg-dark text-white">{props.station.AddressInfo.Title}</CardHeader>
      <CardBody>
        <CardText>{props.station.AddressInfo.AddressLine1}</CardText>
        <CardText>{props.station.AddressInfo.Postcode} {props.station.AddressInfo.StateOrProvince}</CardText>
      </CardBody>
    </Card>
  )
}

export default chargingCard;