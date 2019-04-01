import React, { Component } from 'react';

class SignUpIn extends Component {
  constructor(props) {
    super(props);
    this.createAccount = this.createAccount.bind(this);
    this.signIn = this.signIn.bind(this);
  }

  createAccount(e) {
    e.preventDefault();
    this.props.createAccount();
  }
  signIn(e) {
    e.preventDefault();
    this.props.signIn();
  }

  render() {
    return (
      <div className="SignUpIn">
        <div className="button" onClick={this.createAccount}>
          Sign Up
        </div>
        <div className="button" onClick={this.signIn}>
          Sign In
        </div>
      </div>
    );
  }
}

export default SignUpIn;
