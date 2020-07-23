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
        });
    });
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>I don't know if we are signed in</div>
    } else if (this.state.isSignedIn) {
      return <div>I am signed in!</div>
    } else {
      return <div>I am not signed in</div>
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
