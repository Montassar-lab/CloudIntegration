import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class MapComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lat: null,
        lng: null
      }
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
      this.setState({
        center: {
          lat: latitude,
          lng: longitude
        }
      });
    });
  }

  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'YOUR_API_KEY' }}
          defaultCenter={this.state.center}
          defaultZoom={15}
        >
        </GoogleMapReact>
      </div>
    );
  }
}

export default MapComponent;
