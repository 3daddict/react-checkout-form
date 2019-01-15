import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
        <footer className="footer">
        <div className="container">
          <p className="text-muted text-center">Copyright © {(new Date().getFullYear())} Michael Salvati</p>
        </div>
      </footer>
    )
  }
}
