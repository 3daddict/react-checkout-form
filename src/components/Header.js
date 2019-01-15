import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
 } from 'reactstrap';
 import codeLogo from '../assets/images/Icon_Code.png'

export default class Header extends React.Component {
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
        <Navbar className="navbar-container" color="light" light expand="md">
          <NavbarBrand href="/"><img className="img-fluid" src={codeLogo} alt=""/> Checkout Form</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://msalvati.com" target="_blank">Portfolio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/3daddict/react-checkout-form/" target="_blank">GitHub</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="http://msalvati.com/#contact" target="_blank">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    );
  }
}