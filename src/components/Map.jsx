import React, { Component, PropTypes } from 'react';
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";

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
    ]
  }
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
                defaultZoom={13}
                defaultOptions={{
                  styles: styleMap,
                  scrollwheel: false,
                  navigationControl: true,
                  mapTypeControl: true,
                  scaleControl: true,
                  draggable: true,
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
              </GoogleMap>
              }
            />
          </div>
    );
  }
}

export default Map;
