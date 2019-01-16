import React, { Component } from 'react';
import { Container, Col, Row } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MoneyBackBadge from '../../assets/images/money-back-guarantee-badge.png';
import FastShippingBadge from '../../assets/images/fast-shipping-badge.png'
import SecureCheckoutBadge from '../../assets/images/secure-checkout-badge.png'
import Avatar1 from '../../assets/images/avatar-1.PNG'
import Avatar2 from '../../assets/images/avatar-2.PNG'
import Avatar3 from '../../assets/images/avatar-3.PNG'
import { faStar } from '@fortawesome/free-solid-svg-icons'


export default class InfoReel extends Component {
  render() {
    return (
        <div>
        <Container className="inforeel-container mt-4 mb-4">
        <div className="mb-4">
            <span>Why Shop with Us?</span>
        </div>
        <Row>
            <Col xs="3">
                <Container className="co-badge-container">
                    <img src={MoneyBackBadge} alt="90 days badge"/>
                </Container>
            </Col>
            <Col xs="9">
                <p className="title-p"><strong>100% Satisfaction Guarantee</strong></p>
                <p>If You're not 100% satisfied, we'll issue a full refund.</p>
            </Col>
        </Row>
        <Row>
            <Col xs="3">
                <Container className="co-badge-container">
                    <img src={FastShippingBadge} alt="fast shipping badge"/>
                </Container>
            </Col>
            <Col xs="9">
                <p className="title-p"><strong>Over 5 Million Orders Shipped</strong></p>
                <p>Over 5 million Happy Customers Can't Be Wrong.</p>
            </Col>
        </Row>
        <Row>
            <Col xs="3">
                <Container className="co-badge-container">
                    <img src={SecureCheckoutBadge} alt="secutity badge"/>
                </Container>
            </Col>
            <Col xs="9">
                <p className="title-p"><strong>100% Security</strong></p>
                <p>Your Information Is HIGHLY Secure and Completely Safe GUARANTEED.</p>
            </Col>
        </Row>

    </Container>
    <Container className="mt-4 mb-4">
        <div className="mb-4">
            <span>Real Customer Reviews</span>
        </div>
        <Row>
            <Col xs="3">
                <Container className="avatar-container">
                    <img className="img-fluid" src={Avatar1} alt="Avatar1 review thumb"/>
                </Container>
            </Col>
            <Col xs="9">
                <div className="review-container">
                    <p className="title-p"><strong>Awesome price and fast delivery</strong></p>
                    <div className="star-rate">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div className="co-verified-buyer">
                        <span className="text-danger">Verified Buyer</span>
                        <span className="float-right">2018-06-12</span>
                    </div>
                    <div className="co-review-desc">
                        <p>Received my NES bluetooth controller super fast!!!</p>
                    </div>
                </div>
            </Col>
        </Row>
        <Row>
            <Col xs="3">
                <Container className="avatar-container">
                    <img className="img-fluid" src={Avatar2} alt="Avatar2 review thumb"/>
                </Container>
            </Col>
            <Col xs="9">
                <div className="review-container">
                    <p className="title-p"><strong>Nice customer service</strong></p>
                    <div className="star-rate">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div className="co-verified-buyer">
                        <span className="text-danger">Verified Buyer</span>
                        <span className="float-right">2018-11-02</span>
                    </div>
                    <div className="co-review-desc">
                        <p>I called in about my order and the customer service was excellent.</p>
                    </div>
                </div>
            </Col>
        </Row>
        <Row>
            <Col xs="3">
                <Container className="avatar-container">
                    <img className="img-fluid" src={Avatar3} alt="Avatar3 review thumb"/>
                </Container>
            </Col>
            <Col xs="9">
                <div className="review-container">
                    <p className="title-p"><strong>Good price and selection</strong></p>
                    <div className="star-rate">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div className="co-verified-buyer">
                        <span className="text-danger">Verified Buyer</span>
                        <span className="float-right">2018-04-02</span>
                    </div>
                    <div className="co-review-desc">
                        <p>So many cool tech gadgets at great prices!</p>
                    </div>
                </div>
            </Col>
        </Row>

    </Container>

    </div>
    )
  }
}
