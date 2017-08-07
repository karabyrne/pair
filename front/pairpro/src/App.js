import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router';

import Weather from './components/component_get-weather.js'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      weatherInput: "",
    }
  }

  handleClick = () => {
    console.log("button clicked");
      this.setState({
        weatherInput: this.state.inputValue,
      })
  }
  handleChange = (event) => {
    console.log("event = ", event.target.value);
    this.setState({
      inputValue: event.target.value,
    })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Audio Cloud</h2>
          <img src={require("./cloud-image.png")} alt="cloud" />
        </div>
        <p className="App-intro">
          Music to match your mood <em>and</em>&nbsp; the weather.
        </p>
        <div>
          <input onChange={this.handleChange} type="text" />
          <button onClick={this.handleClick} type="button">Submit</button>
        </div>
        {/* <Weather location={this.state.weatherInput} /> */}
            
        {React.cloneElement(this.props.children, {location: this.state.weatherInput})}
        
      </div>
    );
  }
}

export default App;
