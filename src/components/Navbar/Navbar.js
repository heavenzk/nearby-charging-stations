import React, { Component } from 'react';
import {
  Navbar as RNavbar,
  NavbarToggler,
  NavbarBrand
} from 'reactstrap';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <RNavbar dark color="dark" expand="md" className="sticky-top">
        <NavbarBrand href="/">Charing Stations</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
      </RNavbar>
    );
  }
}

export default Navbar;