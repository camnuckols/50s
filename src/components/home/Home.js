import React, { Component } from 'react';
import './Home.css';
import Spinner from 'react-spinner';

class Home extends Component {
  render() {
    return (
    <div className="Home-container">
        <iframe className="Home-google-form" src="https://docs.google.com/forms/d/e/1FAIpQLSfVl3pzu4Unwde43IvYFxY3Uu7YluNjAokpBAVWyx8uK0v_ZA/viewform?embedded=true">Loading...</iframe>
    </div>
    );
  }
}

export default Home;