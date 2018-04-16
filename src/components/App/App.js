import 'antd/dist/antd.css';
import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';
import { route as routeType } from 'react-router-prop-types';
import './App.css';

class App extends Component {
  static propTypes = {
    route: routeType.isRequired,
  }

  render() {
    const { route } = this.props;

    return (
      <div className="App">
        {renderRoutes(route.routes)}
      </div>
    );
  }
}

export default App;
