// @flow

import React, { Component, useState, useEffect } from "react";
import L from "leaflet";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const icon = L.icon({
  iconUrl:
    "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png",
  iconSize: [24, 24],
  iconAnchor: [12, 24],
  popupAnchor: [0, -24],
});

export default function SimpleExample() {
  const [lat, setLat] = useState(33.8747/*33.8869*/);
  const [lng, setLng] = useState(10.1023/*9.5375*/);
  const [zoom, setZoom] = useState(6);
  useEffect(() => {
    console.log(navigator)
    if (navigator.geolocation) {
      console.log("Get Location...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log({ position });
          alert(
            "Latitude: " +
              position.coords.latitude +
              "Longitude: " +
              position.coords.longitude
          );
        },
        (error) => console.log({ error }),
        { enableHighAccuracy: true }
      );
    } else {
      alert("Cant Get Position !!!");
    }
  }, []);
  const position = [lat, lng];
  return (
    <Map center={position} zoom={zoom} style={{ height: 400 }}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
      />
      <Marker position={position} icon={icon}>
        <Popup>Your Location</Popup>
      </Marker>
    </Map>
  );
}
