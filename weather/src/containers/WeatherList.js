import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';
import GoogleMap from '../components/GoogleMap';

class WeatherList extends Component {
  renderWeather() {
    return this.props.weather.map(cityData => {
      const { id } = cityData.city;
      const temps = _.map(
        cityData.list.map(weather => weather.main.temp),
        temp => ((temp - 273.15) * 9) / 5 + 32
      );
      const winds = cityData.list.map(weather => weather.wind.speed);
      const humidities = cityData.list.map(weather => weather.main.humidity);
      const { lat, lon } = cityData.city.coord;

      return (
        <tr key={id}>
          <td>
            <GoogleMap lat={lat} lon={lon} />
          </td>
          <td>
            <Chart data={temps} color="orange" units="°F" />
          </td>
          <td>
            <Chart data={winds} color="green" units="mph" />
          </td>
          <td>
            <Chart data={humidities} color="blue" units="%" />
          </td>
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
            <th>Temperature (°F) </th>
            <th>Wind (mph)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>{this.renderWeather()}</tbody>
      </table>
    );
  }
}

const mapStateToProps = state => ({ weather: state.weather });

export default connect(mapStateToProps)(WeatherList);
