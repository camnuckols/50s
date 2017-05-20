import React, { Component } from 'react';
import './Analytics.css';

class Analytics extends Component {
  render() {
    return (
    <div className="Analytics-container">
        <iframe className="Analytics-iframe" src="https://docs.google.com/spreadsheets/d/19vPgVhWyjyGW5-m-wbOkdigUntPnAe3w3w_Vkp3adJI/pubhtml?gid=407975155&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
    </div>
    );
  }
}

export default Analytics;
