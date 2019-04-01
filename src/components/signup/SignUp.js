import React, { Component } from 'react';
import Back from './Back';

class SignUp extends Component {
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
      <div className="SignUp">
        SignUp
        <div onClick={this.back}>
          <Back />
        </div>
      </div>
    );
  }
}

export default SignUp;
