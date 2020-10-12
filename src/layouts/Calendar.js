import React, { Component } from 'react';
import '../styles/Calendar.css'
const date = new Date();
 class Calendar extends Component {
     
     state = { 
        time: this.getTime(),
        month: date.getMonth(),
        year: date.getFullYear(),
        day: date.getDate(),
        dayNumber: date.getDay()

    }

    getTime() {
        const currentTime = new Date();
        return({
            hours: currentTime.getHours(),
            minutes: currentTime.getMinutes(),
            seconds: currentTime.getSeconds()
        })
    }

    setTime(){
        const time = this.getTime();
        this.setState({
            time: time
        })
    }

    componentDidMount(){
        setInterval(this.setTime.bind(this), 1000)
    }




     render() { 
        
        var dayNumber = this.state.dayNumber;
        var output = '';
switch (dayNumber) {
case 0:
    output += 'Niedziela';
    break;
case 1:
    output += 'Poniedziałek';
    break;
case 2:
    output += 'Wtorek';
    break;
case 3:
    output += 'Środa';
    break;
case 4:
    output += 'Czwartek';
    break;
case 5:
    output += 'Piątek';
    break;
case 6:
    output += 'Sobota';
    break;
case 7:
    output += 'Niedziela';
    break;
default:
    console.log('Brak podanej nazwy');
}

        const { hours, minutes, seconds } = this.state.time;
        const { day,month,year } = this.state;
         return (
            <div className="calendar">
                <p className='watchIcon'>🕗</p>
                <div className="time">
                    <div className="hours">
                        {hours < 10 ? '0' + hours : hours}
                    </div>
                    <div className="minutes">
                        : {minutes < 10 ? '0' + minutes : minutes} :
                    </div>
                    <div className="seconds">
                        {seconds < 10 ? '0' + seconds : seconds}
                    </div>
                </div>
                <div className="dayNumber">{output}</div>
                <p className="date">{day < 10 ? '0' + day : day} - {month < 10 ? '0' + month : month} - {year}</p>
            </div>
          );
     }
 }
  
 export default Calendar;