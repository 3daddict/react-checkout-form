import React, { Component } from 'react';
import Header from './components/Header';
import CheckoutForm from './components/CheckoutForm';
import Footer from './components/Footer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo);

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
