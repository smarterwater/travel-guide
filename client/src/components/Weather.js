import React from 'react'

import Weather_Form from './Weather_Form';
import Weather_Comp from './Weather_Comp';
import Weather_Suggestions from './Weather_Suggestions';

import Nav from './Nav';

//Weather API KEY (Open Weather JSON)
const API_KEY = "c35783f688db83822b585ed6c0bd1d9d"

class Weather extends React.Component{

    state = {
       temperature: undefined,
       city: undefined,
       country: undefined,
       humidity: undefined,
       description: undefined, 
       error: undefined, 
       feels_like: undefined, 
    }

    //function to get the weather 
    getWeather = async (e) => {
            //prevent default behavior to get object back
            e.preventDefault();

            //get city and country
            const city = e.target.elements.city.value;
            const country = e.target.elements.country.value;
            
            //url for api
            var url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`


            //make API call to OpenWeather
            const api_call = await fetch(url)

            //get JSON data 
            const data = await api_call.json();

            //if we have a city and country, then render code
            if(city && country){

                //if we can't find using an API, then error
                if(data.cod == 404){
                    this.setState({
                        temperature: undefined,
                        city: undefined,
                        country: undefined,
                        humidity: undefined,
                        description: undefined, 
                        error: "City Not Found", 
                        feels_like: undefined, 
                    }); 
                } else{
                    //set data state
                    this.setState({
                        temperature: data.main.temp,
                        city: data.name,
                        country: data.sys.country,
                        humidity: data.main.temp,
                        description: data.weather[0].description, 
                        error: '', 
                        feels_like: data.main.feels_like, 
                    });
                }
            } else {
                this.setState({
                    temperature: undefined,
                    city: undefined,
                    country: undefined,
                    humidity: undefined,
                    description: undefined, 
                    error: "Please Enter a City and Country", 
                    feels_like: undefined, 
                }); 
            }
    }


    render() {
        return (
            <div>  
                <Nav />

                <div className="wrapper">
                    <div className="main">
                        <div className="row">
                                <div className="col-xs-7 form-container">
                                    <Weather_Form getWeather={this.getWeather} />
                                    <Weather_Comp 
                                        temperature={this.state.temperature}
                                        city={this.state.city}
                                        country={this.state.country}
                                        humidity={this.state.humidity}
                                        description={this.state.description}
                                        error = {this.state.error}
                                    />
                                </div> 
                                <div className="col-xs-20 title-container">
                                    <Weather_Suggestions 
                                        temperature={this.state.temperature}
                                    />
                                </div> 
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
}


export default Weather