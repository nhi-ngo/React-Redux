import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';
import GoogleMap from '../components/GoogleMap';

class WeatherList extends Component {
  renderWeather() {
    return this.props.weather.map(cityData => {
      const { id } = cityData.city;
      const temps = cityData.list.map(weather => weather.main.temp);
      const pressures = cityData.list.map(weather => weather.main.pressure);
      const humidities = cityData.list.map(weather => weather.main.humidity);
      const { lat, lon } = cityData.city.coord;

      return (
        <tr key={id}>
          <td>
            <GoogleMap lat={lat} lon={lon} />
          </td>
          <td>
            <Chart data={temps} color="orange" units="K" />
          </td>
          <td>
            <Chart data={pressures} color="green" units="hPa" />
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
            <th>Temperature (K) </th>
            <th>Pressure (hPa)</th>
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
