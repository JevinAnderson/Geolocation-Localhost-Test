import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './application.scss';

class Application extends Component {
  state = {};

  componentDidMount() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(this.addPositionToState);
    }
  }

  addPositionToState = position => {
    const { latitude, longitude } = position.coords;

    this.setState({ latitude, longitude });
  };

  render() {
    const { latitude, longitude } = this.state;

    return (
      <div className="geolocation-application">
        {latitude && longitude ? (
          <div className="coordinates-container">
            <h2 className="coordinates-header">Location coordinates</h2>
            <p className="latitude">Latitude: {latitude}</p>
            <p className="longitude">Longitude: {longitude}</p>
          </div>
        ) : (
          <h2 className="loading-header">Geolocation is loading....</h2>
        )}
      </div>
    );
  }
}

export default Application;
