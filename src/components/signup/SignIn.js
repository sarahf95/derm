import React, { Component } from 'react';
import Back from './Back';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.back = this.back.bind(this);
  }

  back(e) {
    e.preventDefault();
    this.props.back();
  }

  render() {
    return (
      <div className="SignIn">
        Sign In
        <div onClick={this.back}>
          <Back />
        </div>
      </div>
    );
  }
}

export default SignIn;
