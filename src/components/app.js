import React, { Component } from 'react';

import SearchBar from '../container/search_bar';
import Weatherlist from '../container/weather_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar/>
        <Weatherlist/>
      </div>
    );
  }
}
