import React, { Component } from 'react';
import { Container, Col, Row } from "reactstrap";

class CheckoutForm extends Component {
	constructor(props) {
        super(props);
        
        this.state = {

        }
    
    }

    render() {
		return (
            <Container>
                <Row>
                    <Col className="left-col-container" md="6">
                        Column 1
                    </Col>
                    <Col className="right-col-container" md="6">
                        Column 2
                    </Col>
                </Row>
            </Container>
		);
	}
}

export default CheckoutForm;
