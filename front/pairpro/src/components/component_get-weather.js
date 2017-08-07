import React, { Component } from 'react';
import axios from 'axios';

class Weather extends Component {

    constructor(props) {
        super(props);
        this.state = {
            apiKey: "482caa7662eb0d727045533cce8f3c9e",
            mainWeather: null,
        }
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.location !== this.props.location){
            this.getWeather();
        }
    }
    getWeather = () => {
        const self = this;
        //When this component mounts, we want to reach out and get weather for Toronto.
        // axios.get('https://api.openweathermap.org/data/2.5/weather?q=London&appid=482caa7662eb0d727045533cce8f3c9e')
        axios.get('https://api.openweathermap.org/data/2.5/weather', {
            params: {
                q: self.props.location,
                appid: "482caa7662eb0d727045533cce8f3c9e"
            }
        }).then(function (response) {
            console.log(response);
            const mainWeather = response.data.weather[0].main
            console.log("mainWeather = ", mainWeather);
            self.setState({
                mainWeather: mainWeather
            })
        })

            .catch(function (error) {
                console.log(error);
            });

    }




    render() {
        return (
            <div>
                This is the weather: {this.state.mainWeather}
            </div>
        );
    }
}

export default Weather;

