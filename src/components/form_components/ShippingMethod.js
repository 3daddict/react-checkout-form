import React, { Component } from "react";
import { Container, Row, Col, FormGroup, Input, ListGroup, ListGroupItem } from 'reactstrap';
import Toggle from '../Toggle';
import PropTypes from 'prop-types';

class ShippingMethod extends Component {
    constructor(props){
        super(props)

        this.state = {
            standardShippingRate: 0.00,
            priorityShippingRate: 11.41,
            expressShippingRate: 24.95,
        }
    }

    setShippingRate = (event) => {
        this.props.callback(event.target.value);
    }


    render() {
        const { standardShippingRate, priorityShippingRate, expressShippingRate } = this.state;
        
        return (
            <Toggle>
                {({ on, off, toggle }) => (
                <div className="container-fluid toggle-container shipping-methods-container">
                    <h2 onClick={toggle}>Shipping Method {off && <span>+</span>}{on && <span>-</span>}</h2>
                    {on && 
                    <ListGroup>
                        <FormGroup tag="fieldset">
                        <ListGroupItem>
                        <FormGroup check>
                            <Input type="radio" name="coShippingSelection" onChange={this.setShippingRate.bind(this)} value={standardShippingRate} defaultChecked/>
                                <Container>
                                    <Row>
                                        <Col sm="10">
                                            <p>Standard Shipping (3-6 Business Days)</p>
                                        </Col>
                                        <Col sm="2">
                                            <p className="text-right">--</p>
                                        </Col>
                                    </Row>
                                </Container>
                        </FormGroup>
                        </ListGroupItem>
                        <ListGroupItem>
                        <FormGroup check> 
                            <Input type="radio" name="coShippingSelection" onChange={this.setShippingRate.bind(this)}  value={priorityShippingRate} />
                                <Container>
                                    <Row>
                                        <Col sm="10">
                                            <p>Priority Shipping (2-4 Business Days)</p>
                                        </Col>
                                        <Col sm="2">
                                            <p className="text-right">${priorityShippingRate}</p>
                                        </Col>
                                    </Row>
                                </Container>
                        </FormGroup>
                        </ListGroupItem>
                        <ListGroupItem>
                        <FormGroup check> 
                            <Input type="radio" name="coShippingSelection" onChange={this.setShippingRate.bind(this)}  value={expressShippingRate}  />
                                <Container>
                                    <Row>
                                        <Col sm="10">
                                            <p>Express Shipping (1-2 Business Days)</p>
                                        </Col>
                                        <Col sm="2">
                                            <p className="text-right">${expressShippingRate}</p>
                                        </Col>
                                    </Row>
                                </Container>
                        </FormGroup>
                        </ListGroupItem>
                            <div className="text-right mt-1">
                                <a className="apply-link p-xs" href="/">Apply</a>
                                <p className="mt-1 lead p-xs">*Must click apply to update total</p>
                            </div>
                        </FormGroup>
                        
                    </ListGroup>
                    
                    }
                </div>
                )}
            </Toggle>
        )
    }
}

ShippingMethod.protoTypes = {
    callback: PropTypes.func,
}

    export default ShippingMethod;