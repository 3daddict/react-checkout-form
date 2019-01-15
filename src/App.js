import React, { Component } from 'react';
import Header from './components/Header';
import CheckoutForm from './components/CheckoutForm';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <CheckoutForm />
        <Footer />
      </div>
    );
  }
}

export default App;
