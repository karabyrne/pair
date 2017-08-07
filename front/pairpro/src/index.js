import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import './index.css';
import App from './App';
import WeatherSongs from './components/component_weather-songs.js';
import SearchView from './components/component_get-weather.js';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render((
      <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={SearchView} />
        <Route path="genre/:genre" component={WeatherSongs} />
      </Route> 
  </Router> 
),
     document.getElementById('root'));
registerServiceWorker();
