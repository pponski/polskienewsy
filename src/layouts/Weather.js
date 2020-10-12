import React, { Component } from 'react'

class Weather extends Component {
        state = { 
            api: null,
            weather: null,
     }



    // componentDidMount = () => {
    //     var lat;
    //     var lon;
    //     const location = navigator.geolocation.getCurrentPosition(success);
    
    //     function success(position){

    //         var crd = position.coords;

    //         lat = crd.latitude;
    //         lon = crd.longitude;
            
    //         const api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=37291949377ce8e52305b73271f49165`;
    //        setTimeout(this.setState({
    //         api: api
    //     }), 2000)
    //      }

    //      setTimeout(location, 1000)
    //     }



    render() {
        return ( 
            <div className="weather">

            </div>
         );
    }

}

export default Weather;