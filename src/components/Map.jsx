import React, { Component, PropTypes } from 'react';
import {GoogleMapLoader, GoogleMap, Marker, Polyline} from "react-google-maps";
import isMobile from './is-mobile.js';

const styleMap = [
  {
    "featureType": "all",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "weight": "0.20"
      },
      {
        "visibility": "off"
      },
      {
        "color": "#ffffff"
      },
      {
        "lightness": "28"
      },
      {
        "saturation": "23"
      }
    ]
  },
  {
    "featureType": "all",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#494949"
      },
      {
        "lightness": 13
      },
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "all",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#002357"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "lightness": 14
      },
      {
        "weight": 1.4
      },
      {
        "saturation": "20"
      },
      {
        "color": "#1459bf"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "simplified"
      }
    ]
  },
  {
    "featureType": "landscape",
    "elementType": "all",
    "stylers": [
      {
        "color": "#0151c7"
      },
      {
        "saturation": "20"
      },
    ]
  },
  {
    "featureType": "landscape",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "simplified"
      }
    ]
  },
  {
    "featureType": "landscape",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "simplified"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#012862"
      },
      {
        "lightness": 5
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "simplified"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "simplified"
      },
      {
        "weight": "1.00"
      },
      {
        "gamma": "0.00"
      },
      {
        "lightness": "40"
      },
      {
        "saturation": "2"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#002864"
      },
      {
        "weight": "1"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#0b434f"
      },
      {
        "lightness": 25
      },
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#002153"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#0b3d51"
      },
      {
        "lightness": 16
      },
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "all",
    "stylers": [
      {
        "color": "#2272e7"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "all",
    "stylers": [
      {
        "color": "#126bee"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#156ae8"
      }
    ]
  }
];

class Map extends Component {
  state = {
    markers: [
    ],
    isMobile: isMobile()
  };
  handleMapClick() {
  }
  handleMarkerRightclick() {
  }
  componentWillMount() {
    this.setState({
      markers: this.props.markers
    })
  }
  render() {
    var flightPlanCoordinates = [
      { lng: 43.902054, lat: 56.314633 },
      { lng: 43.844032, lat: 56.312538 },
      { lng: 43.785324, lat: 56.310253 },
      { lng: 43.710136, lat: 56.307206 },
      { lng: 43.664131, lat: 56.305872 },
      { lng: 43.560448, lat: 56.301872 },
      { lng: 43.558731, lat: 56.326056 },
      { lng: 43.577957, lat: 56.337095 },
      { lng: 43.594780, lat: 56.358974 },
      { lng: 43.615379, lat: 56.366391 },
      { lng: 43.654861, lat: 56.401744 },
      { lng: 43.691940, lat: 56.391104 },
      { lng: 43.689880, lat: 56.393764 },
      { lng: 43.691940, lat: 56.391056 },
      { lng: 43.686705, lat: 56.391056 },
    ];
    var flightPlanCoordinatesMoscow = [
      { lng: 43.371964, lat: 56.292919 },
      { lng: 43.559418, lat: 56.301301 },
      { lng: 43.558044, lat: 56.326246 },
      { lng: 43.575897, lat: 56.337286 },
      { lng: 43.592720, lat: 56.359545 },
      { lng: 43.615036, lat: 56.367342 },
      { lng: 43.654861, lat: 56.403834 },
      { lng: 43.691940, lat: 56.391104 },
    ];
    return (
      <div style={{height: "500px"}}>
        <GoogleMapLoader
          containerElement={
            <div
              {...this.props}
              styles={styleMap}
              style={{
                height: "500px",
              }}
            />
            }
            googleMapElement={
              <GoogleMap
                ref={(map) => {
                }}
                defaultZoom={10}
                defaultOptions={{
                  styles: styleMap,
                  scrollwheel: false,
                  navigationControl: true,
                  mapTypeControl: true,
                  scaleControl: true,
                  draggable: !this.state.isMobile
                }}
                defaultCenter={this.props.center}
                onClick1={this.handleMapClick.bind(this)}>
                {this.state.markers.map((marker, index) => {
                  return (
                    <Marker key={index}
                      {...marker}
                      onRightclick1={this.handleMarkerRightclick.bind(this, index)} />
                    );
                })}
                <Polyline defaultOptions={{
                  path: flightPlanCoordinates,
                  strokeColor: '#8267FF',
                  strokeOpacity: 0.8,
                  strokeWeight: 3,
                  icons: [{
                    path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                    offset: '100%'
                  }]
                }} />
                <Polyline defaultOptions={{
                  path: flightPlanCoordinatesMoscow,
                  strokeColor: '#FF5769',
                  strokeOpacity: 0.6,
                  strokeWeight: 2,
                  icons: [{
                    path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                    offset: '100%'
                  }]
                }} />
              </GoogleMap>
              }
            />
          </div>
    );
  }
}

export default Map;
