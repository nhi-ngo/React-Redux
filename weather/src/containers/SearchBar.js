import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions';

class SearchBar extends Component {
  state = { term: '' };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  };

  render() {
    return (
      <form className="input-group" onSubmit={this.onFormSubmit}>
        <input
          placeholder="Get a five-day forecast of your favorite cities"
          className="form-control"
          type="text"
          value={this.state.term}
          onChange={e => this.setState({ term: e.target.value })}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    );
  }
}

export default connect(null, { fetchWeather })(SearchBar);
