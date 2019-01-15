import React, { Component } from 'react'
import { Button, Form, FormGroup, Input } from "reactstrap";
import CreditCardInput from 'react-credit-card-input';

export class Payment extends Component {
    constructor(props) {
		super(props);
		
		this.state = {
			paymentSelection: 'credit',
		}

	}

	toggleContent = (event) => {
		event.preventDefault();
		this.setState({
			paymentSelection: event.target.value,
		})
	}

	switchContent = (value) => {
		switch (value) {
            case 'credit':
            let cardNumber = null
            let expiry = ''
            let cvc = null
				return <div>
                    <Form className="mt-4">
                    <FormGroup>
                        <Input type="text" name="ch_name" id="chName" placeholder="Cardholder Name" />
                    </FormGroup>
                    <FormGroup>
                    <CreditCardInput
                        cardNumberInputProps={{ value: cardNumber, onChange: this.handleCardNumberChange }}
                        cardExpiryInputProps={{ value: expiry, onChange: this.handleCardExpiryChange }}
                        cardCVCInputProps={{ value: cvc, onChange: this.handleCardCVCChange }}
                        fieldClassName="input"
                        value={value || ''}
                    />
                    </FormGroup>
                    </Form>
				</div>;
			case 'paypal':
                return <div class="box">
                    <span class="paypal-logo">
                        <i>Pay</i><i>Pal</i>
                    </span>

                    <br />

                    <button class="paypal-button">
                        <span class="paypal-button-title">
                            Buy now with
                        </span>
                        <span class="paypal-logo">
                            <i>Pay</i><i>Pal</i>
                        </span>
                    </button>
                </div>;
			case 'amazon':
                return <div className="text-center mt-4 mb-4">
                        <img alt="AmazonPay" src="https://d2ldlvi1yef00y.cloudfront.net/default/us/sandbox/lwa/gold/large/PwA.png" />
                    </div>;

			default:
				return null;
		}
	}

    render() {
		const { paymentSelection } = this.state;

        return (
            <div className="container-fluid payment-btn-group">
					<Button outline className={paymentSelection ==='credit' ? 'active' : null} color="secondary" value="credit" onClick={this.toggleContent} >Credit Card</Button>
					<Button outline className={paymentSelection ==='paypal' ? 'active' : null} color="secondary" value="paypal" onClick={this.toggleContent} >PayPal</Button>
					<Button outline className={paymentSelection ==='amazon' ? 'active' : null} color="secondary" value="amazon" onClick={this.toggleContent} >Amazon</Button>
				{this.switchContent(paymentSelection)}
            </div>
        );
    }
}

export default Payment
