import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Toggle from "../Toggle";
import PiImg from '../../assets/images/Raspberry_Pi.png';
import PiLcdImg from '../../assets/images/Raspberry_Pi_LCD.png';

export default class CartDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemCount: 2,
      subTotal: 111.42,
      taxes: 9.14,
      falseShipping: true
    };
  }

  render() {
    const { itemCount, subTotal, taxes } = this.state;
    const shippingTotal = Number(this.props.data);
    const orderTotal = subTotal + shippingTotal + taxes;

    return (
      <Container className="cart-details-container">
        <Toggle className="container-fluid">
          {({ on, off, toggle }) => (
            <div className="container-fluid">
              <h2 onClick={toggle}>
                <span>See item Details</span> {off && <span>+</span>}
                {on && <span>-</span>}
              </h2>
              {on && (
                <Container>
                  <Row>
                    <Col xs="9">
                      <div className="media">
                        <img
                          src={PiImg}
                          className="img-fluid mr-3"
                          alt="raspberry pi"
                        />
                        <div className="media-body">
                          <h5 className="mt-0">
                            Raspberry Pi 3 Model B Motherboard
                          </h5>
                        </div>
                      </div>
                      <div className="media-count">
                        <p>1</p>
                      </div>
                    </Col>
                    <Col xs="3">
                      <div className="conatiner-fluid">
                        <h6>$38.50</h6>
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col xs="9">
                      <div className="media">
                        <img
                          src={PiLcdImg}
                          className="img-fluid mr-3"
                          alt="pi lcd"
                        />
                        <div className="media-body">
                          <h5 className="mt-0">
                            Raspberry Pi 7" Touchscreen Display
                          </h5>
                        </div>
                      </div>
                      <div className="media-count">
                        <p>1</p>
                      </div>
                    </Col>
                    <Col xs="3">
                      <div className="conatiner-fluid">
                        <h6>$72.92</h6>
                      </div>
                    </Col>
                  </Row>
                </Container>
              )}
            </div>
          )}
        </Toggle>
        <Container className="mt-4">
          <Row>
            <Col xs="9">
              <h6>Subtotal ({itemCount} items):</h6>
            </Col>
            <Col xs="3">
              <h6>${subTotal}</h6>
            </Col>
          </Row>
          <Row>
            <Col xs="9">
              <h6>Shipping:</h6>
            </Col>
            <Col xs="3">
              <h6>
                {shippingTotal !== 0 ? (
                  Number(this.props.data)
                ) : (
                  <span>--</span>
                )}
              </h6>
            </Col>
          </Row>
          <Row>
            <Col xs="9">
              <h6>Taxes:</h6>
            </Col>
            <Col xs="3">
              <h6>${taxes}</h6>
            </Col>
          </Row>
          <Row>
            <Col xs="9">
              <h6>Total: </h6>
            </Col>
            <Col xs="3">
              <h6>${orderTotal}</h6>
            </Col>
          </Row>
        </Container>
        <Container>
          <div>
            <a href="/">100% Price Match Guarantee</a>
          </div>
          <div>
            <a href="/">90 Day Returns</a>
          </div>
        </Container>
        <Button className="mt-4" color="primary" block>
          COMPLETE ORDER
        </Button>
      </Container>
    );
  }
}
