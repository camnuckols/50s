import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Analytics from './components/analytics/Analytics';
import Leaderboard from './components/leaderboard/Leaderboard';
import Countdown from 'react-countdown-clock';
import moment from 'moment';

class App extends Component {
  constructor( props ) {
    super( props );
    var d = new Date();
    let msSinceMidnight = d.getTime() - d.setHours(0,0,0,0);
    let midnight = ( 86400000 - msSinceMidnight ) / 1000;
    this.state = {
      page: 1,
      midnight: midnight
    }
    this.changePage = this.changePage.bind( this );
  }
  changePage( num ) {
    this.setState( { page: num } );
  }
  render() {
    return (
        <div className="App-container">
          <Navbar />
          { <div className="Home-container" className="Home-google-form" style={{display: this.state.page === 1 ? "block" : "none"}}>
              <iframe className="Home-google-form" src="https://docs.google.com/forms/d/e/1FAIpQLSfVl3pzu4Unwde43IvYFxY3Uu7YluNjAokpBAVWyx8uK0v_ZA/viewform?embedded=true">Loading...</iframe>
          </div> }
          { <iframe className="Analytics-iframe" style={{display: this.state.page === 2 ? "block" : "none"}} src="https://docs.google.com/spreadsheets/d/19vPgVhWyjyGW5-m-wbOkdigUntPnAe3w3w_Vkp3adJI/pubhtml?gid=407975155&amp;single=true&amp;widget=true&amp;headers=false"></iframe> }
          { <iframe className="Analytics-iframe" style={{display: this.state.page === 3 ? "block" : "none"}} src="https://docs.google.com/spreadsheets/d/19vPgVhWyjyGW5-m-wbOkdigUntPnAe3w3w_Vkp3adJI/pubhtml?gid=1911393012&amp;single=true&amp;widget=true&amp;headers=false"></iframe> }
          { <div className="Home-google-form" style={{display: this.state.page === 4 ? "block" : "none"}}>
              <a href="sms:/18018210113/&body=Give me some motivation!"><button className="get-motivation">Get Motivated</button></a>
              <Countdown seconds={ this.state.midnight }
                     color="#1B98E0"
                     alpha={ 0.9 }
                     size={ 300 } />
          </div> }
          <Footer changePage={ this.changePage } active={ this.state.page } />
        </div>
    );
  }
}

export default App;
