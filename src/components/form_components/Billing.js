import React, { Component } from "react";
import { Container, Col, Row, Form, FormGroup, Input, Label, ListGroup, ListGroupItem } from "reactstrap";
import Toggle from "../Toggle";
import CountryOptions from './input_options/countryOptions';
import StateOptions from './input_options/stateOptions';
import PlusIcon from '../../assets/images/_ionicons_svg_md-add.png';

export default class Billing extends Component {
    constructor(props){
        super(props)

        this.state = { checked: false };
    }

    handleChange = () => {
        this.setState({
            checked: !this.state.checked
          });
    }

    hideContent = () => {
        this.setState({
            checked: false
          });
    }

  render() {
    const content = this.state.checked 
      ? 
      <Form>
      <FormGroup>
        <Input
          type="email"
          name="co_bil_email"
          id="coBillContactEmail"
          placeholder="Email (For Order Confirmation)"
        />
      </FormGroup>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Input
              type="text"
              name="co_bil_first_name"
              id="coBillFirstName"
              placeholder="First name"
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Input
              type="text"
              name="co_bil_last_name"
              id="coBillLastName"
              placeholder="Last name"
            />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Input
          type="text"
          name="co_bil_address"
          id="coBillAddress"
          placeholder="Address"
        />
      </FormGroup>
      <FormGroup>
        <Toggle>
          {({ on, off, toggle }) => (
            <div className="toggle-container address-text">
              {on && (
                <Input
                  type="text"
                  name="co_bil_address2"
                  id="coBillAddress2"
                  placeholder="Apartment, suite, etc. (optional)"
                />
              )}
              {off && (
                <div onClick={toggle}>
                  <p>
                    <img
                      className="toggle-ico"
                      src={PlusIcon}
                      alt="expand icon"
                    />{" "}
                    Add Address line 2
                  </p>
                </div>
              )}
            </div>
          )}
        </Toggle>
      </FormGroup>
      <FormGroup>
        <Input
          type="text"
          name="co_bil_city"
          id="coBillCity"
          placeholder="City"
        />
      </FormGroup>
      <Row form>
        <Col md={5}>
          <FormGroup className="dropdown-container">
            <Label for="coBillCountry">Country</Label>
            <CountryOptions />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup className="dropdown-container">
            <Label for="coBillState">State</Label>
            <StateOptions />
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
          <Label for="coZip">Zip</Label>
            <Input
              className="zip-input"
              type="text"
              name="co_bil_zipcode"
              id="coBillZipCode"
              placeholder="ZIP Code"
            />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Input
          type="phone"
          name="co_bill_phone"
          id="coBilPhone"
          placeholder="Phone (For Shipping Updates)"
        />
      </FormGroup>
    </Form>
      : null;

    return (
      <Container>
        <Row className="container-fluid co-title-row">
          <h2>Billing Address</h2>
        </Row>
        <ListGroup>
          <FormGroup tag="fieldset">
            <ListGroupItem>
              <FormGroup check>
                <Input type="radio" name="coBillingSelection" onChange={ this.hideContent } defaultChecked />
                <Container>
                  <Row className="container-fluid">
                    <p>Same as shipping address</p>
                  </Row>
                </Container>
              </FormGroup>
            </ListGroupItem>
            <ListGroupItem>
              <FormGroup check>
                <Input type="radio" name="coBillingSelection" checked={ this.state.checked } 
          onChange={ this.handleChange } />
                <Container>
                  <Row>
                    <p>Use a different billing address</p>
                  </Row>
                </Container>
              </FormGroup>
            </ListGroupItem>
          </FormGroup>
        </ListGroup>
        { content }
      </Container>
    );
  }
}
