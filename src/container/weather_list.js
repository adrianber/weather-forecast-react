import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

    renderWeather(cityData) {

        const name = cityData.city.name;
        const temps = _.map(cityData.list.map(weather => weather.main.temp), temp => temp-273);
        const preasures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const {lon, lat} = cityData.city.coord;

        //we need a key for the top element
        return (
            <tr key={name}>
                <td>
                    <GoogleMap lon={lon} lat={lat}></GoogleMap>
                </td>
                <td>
                    <Chart data={temps} color="orange" units="C"></Chart>
                </td>
                <td>
                    <Chart data={preasures} color="green" units="hPa"></Chart>
                </td>
                <td>
                    <Chart data={humidities} color="black" units="%"></Chart>
                </td>
            </tr>
        )
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature C</th>
                    <th>Preassure hPa</th>
                    <th>Humidity %</th>
                </tr>
                </thead>
                <tbody>
                {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

//REDUX STATE  so we can have access to this.props.weather inside WeatherList
function mapStateToProps({weather}) {
    return {weather}; // weather = state.weather;
}

export default connect(mapStateToProps)(WeatherList);