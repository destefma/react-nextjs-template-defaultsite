import React, { Component } from 'react'
import Typed from "typed.js";


export class TypedLabel extends React.Component {

  componentDidMount() {

    const { strings } = this.props;

    const options = {
      strings: strings,
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    };

    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {

    this.typed.destroy();
  }

  render() {
    return (
      <div className="wrap">
        <div className="type-wrap">
          <span
            style={{ whiteSpace: 'pre' }}
            ref={(el) => { this.el = el; }}
          />
        </div>
      </div>
    );
  }
}


export default TypedLabel