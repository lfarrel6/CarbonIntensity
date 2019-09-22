import React, {Component} from 'react';
import './App.css';

import {CIHeader,CIGrid} from './components/CIExporter.js';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      isLoaded: false,
      location: null,
      isScreenFinished: false,
    };

    this.getLocation = this.getLocation.bind(this);
    this.getDashboard = this.getDashboard.bind(this);
  }

  componentDidMount(){
    this.getLocation();
    setTimeout(() => {
      this.setState({isScreenFinished:true})
    },2500);
  }

  getLocation(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((x) => {
        this.setState({
          isLoaded: true,
          location: x
        });
      });
    }
    else{
      this.setState({
        isLoaded: true,
        location: 'London'
      });
    }
  }

  getDashboard(){
    return(
      <React.Fragment>
        <CIHeader location={this.state.location}/>
        <CIGrid location={this.state.location}/>
      </React.Fragment>
    );
  }

  getBufferScreen(){
    return(
      <div className='loading-screen'>Loading...</div>
    );
  }

  render(){
    let appBody = (this.state.isLoaded && this.state.isScreenFinished)?this.getDashboard():this.getBufferScreen();
    return (
      <div className="App">
        {appBody}
      </div>
    );
  }
}

export default App;
