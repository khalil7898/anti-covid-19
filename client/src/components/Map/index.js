import React from "react";
import L from "leaflet";
//import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";

export default class Map extends React.Component {
  componentDidMount() {
    this.map = L.map("map", {
      center: [50, 16],
      zoom: 6,
      zoomControl: false,
    });
    L.tileLayer(
      "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",
      {
        detectRetina: true,
        maxZoom: 20,
        maxNativeZoom: 17,
      }
    ).addTo(this.map);
  }
  render() {
    return (
      <div style={{ height: 400, width: "100%" }} id="map">
        Map here ...
      </div>
    );
  }
}
