import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends Component {
  renderSubmit(value) {
    return value === 'english' ? 'Submit' : 'Gửi đi';
  }

  renderButton(color) {
    return (
      <button className={`ui button ${color}`} type="submit">
        <LanguageContext.Consumer>{(value) => this.renderSubmit(value)}</LanguageContext.Consumer>
      </button>
    );
  }

  render() {
    return <ColorContext.Consumer>{(color) => this.renderButton(color)}</ColorContext.Consumer>;
  }
}

export default Button;
