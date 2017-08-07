import React, { Component } from 'react';
import axios from 'axios';

class WeatherSongs extends Component {
     render() {
        return (
            <div>
                Everything else goes here and the genre is {this.props.params.genre}
            </div>
        );
    }
}

export default WeatherSongs;