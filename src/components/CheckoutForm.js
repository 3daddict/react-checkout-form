import React, { Component } from 'react';
import { Container, Col, Row } from "reactstrap";
import ContactInfo from './form_components/ContactInfo';
import ShippingMethod from './form_components/ShippingMethod';

import CartDetails from './form_components/CartDetails';

class CheckoutForm extends Component {
	constructor(props) {
        super(props);
        
        this.state = {
            data : ""
		};
    
    }

    formChild1(params) {
        this.setState({
          data : params
        })
      }


    render() {
		return (
            <Container>
                <Row>
                    <Col className="left-col-container" md="6">
                        <ContactInfo />
                        <ShippingMethod callback={this.formChild1.bind(this)} />
                    </Col>
                    <Col className="right-col-container pb-4" md="6">
                        <CartDetails data={this.state.data} />
                    </Col>
                </Row>
            </Container>
		);
	}
}

export default CheckoutForm;
