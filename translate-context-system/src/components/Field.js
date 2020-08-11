import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends Component {
  static contextType = LanguageContext;

  render() {
    const text = this.context === 'english' ? 'Name' : 'Họ và Tên';

    return (
      <div className="ui field">
        <label htmlFor="name">{text}</label>
        <input type="text" />
      </div>
    );
  }
}

export default Field;
