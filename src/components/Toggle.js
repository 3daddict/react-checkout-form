import { Component } from "react";

export default class Toggle extends Component {
  state = {
    on: false,
    off: true
  };

  toggle = () => {
    this.setState({
      on: !this.state.on,
      off: !this.state.off
    });
  };

  render() {
    const { children } = this.props;
    return children({
      on: this.state.on,
      off: this.state.off,
      toggle: this.toggle
    });
  }
}
