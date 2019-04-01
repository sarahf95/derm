import React, { Component } from 'react';
import './App.css';
import PageContainer from './components/PageContainer';
import { auth } from './FirebaseConfig';
import SignUpInController from './components/signup/SignUpInController';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authenticated: false,
      signInDenied: false,
      account: null
    };
    this.signOut = this.signOut.bind(this);
  }

  signOut(event) {
    event.preventDefault();

    auth.signOut();
  }

  componentDidMount() {
    // check whether user is logged in
    auth.onAuthStateChanged(
      function(user) {
        this.setState({
          authenticated: true,
          signInDenied: false,
          account: null
        });
      }.bind(this)
    );
  }

  aggrAccount(snapshot) {
    let account = snapshot.val();
    account.uid = snapshot.key;

    if (account.isVerified && account.isActivated) {
      this.setState({
        authenticated: true,
        signInDenied: false,
        account: account
      });
    } else {
      // account is not verified or activated, deny sign in
      this.setState({
        authenticated: true,
        signInDenied: true,
        account: null
      });
      auth.signOut();
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.authenticated ? (
            this.state.account ? (
              /* Show Calendar page if user is logged in */
              <div>
                <PageContainer
                  account={this.state.account}
                  signOut={this.signOut}
                />
              </div>
            ) : (
              <div>
                <SignUpInController />
              </div>
            )
          ) : (
            /* Show blank page if initial authentication hasn't finished */
            <div />
          )}
        </header>
      </div>
    );
  }
}

export default App;
