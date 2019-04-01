import React, { Component } from 'react';
import SignUp from './SignUp';
import SignIn from './SignIn';
import SignUpIn from './SignUpIn';

class SignUpInController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0
    };

    this.renderPage = this.renderPage.bind(this);
    this.createAccount = this.createAccount.bind(this);
    this.signIn = this.signIn.bind(this);
    this.back = this.back.bind(this);
  }

  createAccount() {
    this.setState({ page: 1 });
  }

  signIn() {
    this.setState({ page: 2 });
  }

  back() {
    this.setState({ page: 0 });
  }

  renderPage() {
    switch (this.state.page) {
      case 1:
        return <SignUp back={this.back} />;
      case 2:
        return <SignIn back={this.back} />;
      default:
        return (
          <SignUpIn createAccount={this.createAccount} signIn={this.signIn} />
        );
    }
  }

  render() {
    return <div className="SignUpInController">{this.renderPage()}</div>;
  }
}

export default SignUpInController;
