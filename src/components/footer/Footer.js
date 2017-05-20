import React, { Component } from 'react';
import './Footer.css';
import Fifty from 'react-icons/lib/fa/500px';
import Chart from 'react-icons/lib/fa/area-chart';
import Trophy from 'react-icons/lib/fa/trophy';
import Motivation from 'react-icons/lib/md/wb-incandescent';
import { NavLink } from 'react-router-dom';

class Footer extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            active: 'Footer-icon Footer-active',
            notActive: 'Footer-icon'
        }
    }
  render() {
    return (
    <div className="Footer-container">
        <button onClick={ () => this.props.changePage( 1 ) } className="Footer-icon-container">
            <Fifty size={ 20 } id="Footer-fifty-icon" className={ this.props.active === 1 ? this.state.active : this.state.notActive } />
        </button>
        <button onClick={ () => this.props.changePage( 2 ) } className="Footer-icon-container">
            <Chart size={ 20 } id="Footer-chart-icon" className={ this.props.active === 2 ? this.state.active : this.state.notActive } />
        </button>
        <button onClick={ () => this.props.changePage( 3 ) } className="Footer-icon-container">
            <Trophy size={ 20 } id="Footer-trophy-icon" className={ this.props.active === 3 ? this.state.active : this.state.notActive } />
        </button>
        <button onClick={ () => this.props.changePage( 4 ) } className="Footer-icon-container">
            <Motivation size={ 20 } id="Footer-trophy-icon" className={ this.props.active === 4 ? this.state.active : this.state.notActive } />
        </button>
    </div>
    );
  }
}

export default Footer;
