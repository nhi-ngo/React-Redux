import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';
class GoogleAuth extends Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load('auth2', () => {
      /* Ready. Make a call to gapi.auth2.init or some other API */
      window.gapi.auth2
        .init({
          clientId: '532501273012-o83boajl6e2iii5j8b11l6rg7295ilre.apps.googleusercontent.com',
          scope: 'email',
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() }); // returns a boolean of whether current user is currently signed in
          this.auth.isSignedIn.listen(this.onAuthChange); // Listen for changes in current user's sign-in state. A function that takes a boolean value.
        });
    });
  }

  onAuthChange = (signedIn) => {
    if (signedIn) {
      this.props.signIn();
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  }

  onSignOutClick = () => {
    this.auth.signOut();
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon"></i>
          Sign Out
        </button>);
    } else {
      return (
        <button onClick={this.onSignInClick} className="ui red google button">
          <i className="google icon"></i>
            Sign In
        </button>
      )
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default connect(null, { signIn, signOut })(GoogleAuth);
