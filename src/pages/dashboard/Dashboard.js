import React, { Component } from 'react';
import './dashboard.scss';
import Header from '../../components/Header/Header';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="widgets">
          <h1>Hello World</h1>
        </div>
      </div>
    );
  }
}


export default Dashboard;
