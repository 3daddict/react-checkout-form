import React from "react";
import { Col, Row, Form, FormGroup, Input, Label, Button, ButtonGroup } from "reactstrap";
import Toggle from '../Toggle';
import CountryOptions from './input_options/countryOptions';
import StateOptions from './input_options/stateOptions';
import PlusIcon from '../../assets/images/_ionicons_svg_md-add.png';

export default class FormContactInfo extends React.Component {
  render() {
    return (
      <Form className="container-fluid contact-info-container">
        <h2 className="mb-3">Contact Information</h2>
        <FormGroup>
          <Input type="email" name="co_email" id="coContactEmail" placeholder="Email (For Order Confirmation)" />
        </FormGroup>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Input type="text" name="co_first_name" id="coFirstName" placeholder="First name" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Input type="text" name="co_last_name" id="coLastName" placeholder="Last name" />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Input type="text" name="co_address" id="coAddress" placeholder="Address" />
        </FormGroup>
        <FormGroup>
            <Toggle>
            {({ on, off, toggle }) => (
            <div className="toggle-container address2-text">
                {on && <Input type="text" name="co_address2" id="coAddress2" placeholder="Apartment, suite, etc. (optional)" />}
                {off && <div onClick={toggle}><p className="p-xs"><img className="toggle-ico" src={PlusIcon} alt="expand icon"/> Add Address line 2</p></div>}
            </div>
            )}
            </Toggle>
        </FormGroup>
        <FormGroup>
        <Input type="text" name="co_city" id="coCity" placeholder="City" />
        </FormGroup>
        <Row form>
          <Col md={5}>
            <FormGroup className="dropdown-container">
                <Label for="coCountry">Country</Label>
                <CountryOptions />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup className="dropdown-container">
                <Label for="coState">State</Label>
                <StateOptions />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
            <Label for="coZip">Zip</Label>
              <Input className="zip-input" type="text" name="co_zipcode" id="coZipCode" placeholder="ZIP Code" />
            </FormGroup>
          </Col>
        </Row>
		<FormGroup>
			<Input type="phone" name="co_phone" id="coPhone" placeholder="Phone (For Shipping Updates)" />
        </FormGroup>
        <ButtonGroup>
          <Button color="secondary">Edit</Button>
          <Button color="primary">Save</Button>
        </ButtonGroup>
      </Form>
    );
  }
}
