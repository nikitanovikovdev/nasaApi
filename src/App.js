import React from "react";
import Calendar from "./components/calendar";
import Contant from "./components/content";
import Button from "./components/button";

const API_KEY = '73AOt0cy0HpWgQ1dcYx9TiVPl2shIRBUGCefqNDt';

class App extends React.Component {

  state = {
      date: undefined,
      url: undefined,
      error: undefined
  }


  gettingData = async (e) => {
    e.preventDefault();
    const api_url = await fetch(`https://api.nasa.gov/planetary/apod?date=${this.state.date}&api_key=${API_KEY}`);
    const data = await api_url.json()
    console.log(data)

    this.setState({
        date: data.date,
        url: data.url,
        error: ""
    })
  }

  changeDate = date => {
      this.setState({date:date})
      console.log(date)
  }

  render() {
    return (
        <div className='wrapper'>
            <div className='calendar'>
                <Calendar
                    dateChange = {this.changeDate}
                />
            </div>
            <div className='main'>
                <Contant
                    date={this.state.date}
                    url={this.state.url}
                    error={this.state.error}
                />
                <Button dataMethod={this.gettingData}/>
            </div>
        </div>
    )
  }
}

export default App;
