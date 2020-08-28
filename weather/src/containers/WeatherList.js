import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
  renderWeather() {
    return this.props.weather.map(cityData => {
      const { id, name } = cityData.city;
      const { temp, pressure, humidity } = cityData.list[0].main;

      return (
        <tr key={id}>
          <th scope="row">{name}</th>
          <td>{temp}</td>
          <td>{pressure}</td>
          <td>{humidity}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>{this.renderWeather()}</tbody>
      </table>
    );
  }
}

const mapStateToProps = state => ({ weather: state.weather });

export default connect(mapStateToProps)(WeatherList);
