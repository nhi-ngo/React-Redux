import React, { Component } from 'react';
import UserCreate from './UserCreate';

class App extends Component {
  state = { language: 'english' };

  onLanguageChange(language) {
    this.setState({ language });
  }

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i onClick={() => this.onLanguageChange('english')} className="flag us" />
          <i onClick={() => this.onLanguageChange('vietnamese')} className="flag vn" />
        </div>
        <UserCreate />
      </div>
    );
  }
}

export default App;
