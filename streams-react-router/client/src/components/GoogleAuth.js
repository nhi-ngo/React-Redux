import React, { Component } from 'react';

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
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  // auth status changes without refreshing the page
  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  onSignIn = () => {

  }

  onSignOut = () => {
    
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return (
        <button className="ui red google button">
          <i className="google icon"></i>
          Sign Out
        </button>);
    } else {
      return (
        <button className="ui red google button">
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

export default GoogleAuth;
