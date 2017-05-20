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

{/*<div className="Home-title">
            <h1>Nuckols Family 50's</h1>
        </div>*/}
        /*
        <div className="Home-body">
            <h2 className="Home-title">Who are you?</h2>
            <ul>
                <li>
                    <h3><input type="radio" name="name" value="Mom" /> Mom</h3>
                </li>
                <li>
                    <h3><input type="radio" name="name" value="Cierra" /> Cierra</h3>
                </li>
                <li>
                    <h3><input type="radio" name="name" value="Brennon" /> Brennon</h3>
                </li>
                <li>
                    <h3><input type="radio" name="name" value="Ashlyn" /> Ashlyn</h3>
                </li>
                <li>
                    <h3><input type="radio" name="name" value="Katie" /> Katie</h3>
                </li>
                <li>
                    <h3><input type="radio" name="name" value="Cameron" /> Cameron</h3>
                </li>
            </ul>
            <h2 className="Home-title">Did you do your 50's?</h2>
            <form className="Home-50s-radio-container">
                <span className="Home-radio">
                    <input type="radio" name="completed" value="yes" /> Yes
                </span>
                <span className="Home-radio">
                    <input type="radio" name="completed" value="no" /> No
                </span>
            </form>
            <button className="Home-submit-button">Submit</button>
        </div>
*/