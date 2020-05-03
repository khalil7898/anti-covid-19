import React, { Component, useState, useEffect } from "react";
import L from "leaflet";
import { Map, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { tunisiaGeojson } from "./geojson/tunisia";
import { gabesGeojson } from "./geojson/gabes";
import { kefGeojson } from "./geojson/kef";
import { teuzeurGeojson } from "./geojson/teuzeur";
import { gafsaGeojson } from "./geojson/gafsa";
import { gbelliGeojson } from "./geojson/gbelli";
import { tatawinGeojson } from "./geojson/tatawin";
import { medninGeojson } from "./geojson/mednin";
import { sfaxGeojson } from "./geojson/sfax";
import { bouzidGeojson } from "./geojson/bouzid";
import { gasrinGeojson } from "./geojson/gasrin";
import { mahdiaGeojson } from "./geojson/mahdia";
import { monastirGeojson } from "./geojson/monastir";
import { sousseGeojson } from "./geojson/sousse";
import { quoroinGeojson } from "./geojson/quoroin";
import { siliyanaGeojson } from "./geojson/siliyana";
import { zaghwenGeojson } from "./geojson/zaghwen";
import { nabeulGeojson } from "./geojson/nabeul";
import { jandoubaGeojson } from "./geojson/jandouba";
import { bejaGeojson } from "./geojson/beja";
import { benzartGeojson } from "./geojson/benzart";
import { tunisGeojson } from "./geojson/tunis";

import redIcon from "./icons/red.png";
import greenIcon from "./icons/green.png";
import blueIcon from "./icons/blue.png";
import yellowIcon from "./icons/yellow.png";
import orangeIcon from "./icons/orange.png";

const STATUS = {
  COVID: 0,
  QUARANTINE: 1,
  EMERGENCY: 2,
};
const listColors = [
  "#333333", // 0
  "#3ee641", // 0  > 5
  "#e6e03e", // 6 > 10
  "#e6b93e", // 11 > 15
  "#e6953e", // 20 > 25
  "#e6763e", // 26 > 30
  "#e64c3e", // 30 > 100
];

const listGeojsons = [
  { data: gabesGeojson, name: "Gabes", nbCases: 33 },
  { data: kefGeojson, name: "Kef", nbCases: 3 },
  { data: teuzeurGeojson, name: "Teuzeur", nbCases: 2 },
  { data: gafsaGeojson, name: "Gafsa", nbCases: 30 },
  { data: gbelliGeojson, name: "Gbelli", nbCases: 0 },
  { data: tatawinGeojson, name: "Tatawin", nbCases: 1 },
  { data: medninGeojson, name: "Mednin", nbCases: 88 },
  { data: sfaxGeojson, name: "Sfax", nbCases: 66 },
  { data: bouzidGeojson, name: "Sidi Bouzid", nbCases: 7 },
  { data: gasrinGeojson, name: "Gasrin", nbCases: 6 },
  { data: mahdiaGeojson, name: "Mahdiya", nbCases: 37 },
  { data: monastirGeojson, name: "Monastir", nbCases: 66 },
  { data: sousseGeojson, name: "Sousse", nbCases: 113 },
  { data: quoroinGeojson, name: "Quoroin", nbCases: 88 },
  { data: siliyanaGeojson, name: "Siliyana", nbCases: 12 },
  { data: zaghwenGeojson, name: "Zaghwen", nbCases: 29 },
  { data: nabeulGeojson, name: "Nabeul", nbCases: 56 },
  { data: jandoubaGeojson, name: "Jandouba", nbCases: 8 },
  { data: bejaGeojson, name: "Beja", nbCases: 0 },
  { data: benzartGeojson, name: "Benzart", nbCases: 41 },
  { data: tunisGeojson, name: "Tunis", nbCases: 338 },
];
listGeojsons.totalCases = listGeojsons.reduce((a, b) => {
  return a + b.nbCases;
}, 0);
const getStatusMessage = (status) => {
  switch (status) {
    case STATUS.COVID:
      return "COVID-19 case";
    case STATUS.QUARANTINE:
      return "Under quarentine";
    case STATUS.EMERGENCY:
      return "Emergency case";
    default:
      return "Others";
  }
};
const getStatusIcon = (status) => {
  switch (status) {
    case STATUS.COVID:
      return L.icon({ iconUrl: redIcon, iconSize: [4, 4] });
    case STATUS.QUARANTINE:
      return L.icon({ iconUrl: blueIcon, iconSize: [4, 4] });
    case STATUS.EMERGENCY:
      return L.icon({ iconUrl: orangeIcon, iconSize: [4, 4] });
    default:
      return L.icon({
        iconUrl:
          "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png",
        iconSize: [24, 24],
        iconAnchor: [12, 24],
        popupAnchor: [0, -24],
      });
  }
};

const staticLocation = {
  lat: 33.8091,
  lng: 10.1778,
};
const listCovidsTest = [
  { location: { lat: 34.926308, lng: 9.498118 }, status: 0 },
  { location: { lat: 35.911133, lng: 8.937815 }, status: 1 },
  { location: { lat: 35.801239, lng: 10.40116 }, status: 2 },
];
export default function SimpleExample() {
  const [myLocation, setMyLocation] = useState(staticLocation);
  const [covidCases, setCovidCases] = useState(listCovidsTest);
  const [zoom, setZoom] = useState(6);

  console.log({ total: listGeojsons.totalCases });
  const setLocation = (lat, lng) => {
    setMyLocation({ lat, lng });
  };
  console.log({ tunisiaGeojson });
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log({ position });
        setLocation(position.coords.latitude, position.coords.longitude);
      },
      (error) => {
        console.log({ error });
        if (error.code === 1)
          alert(
            error.message + "\n Enabel Geolocation to get best experience :)"
          );
      },
      { enableHighAccuracy: true }
    );
  }, []);
  const position = [myLocation.lat, myLocation.lng];
  return (
    <Map center={position} zoom={zoom} style={{ height: 400 }}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
      />
      <Marker position={position} icon={getStatusIcon(-1)}>
        <Popup>Your Location</Popup>
      </Marker>
      {covidCases.map((cc) => (
        <Marker
          position={[cc.location.lat, cc.location.lng]}
          icon={getStatusIcon(cc.status)}
        />
      ))}
      <GeoJSON
        data={tunisiaGeojson}
        onClick={() => console.log("qsdqsdqsdqs")}
        style={() => ({
          fillColor: "#333",
          color: "#42b6f5",
          weight: 1,
          opacity: 1,
        })}
      />
      {listGeojsons.map((el, index) => (
        <GeoJSON
          data={el.data}
          onClick={() => console.log(el.name)}
          style={() => ({
            fillColor: getColor(el.nbCases, listGeojsons.totalCases),
            color: "#fff",
            weight: 1,
            opacity: 1,
          })}
        />
      ))}
    </Map>
  );
}
function getColor(nbCases) {
  if (nbCases == 0) return listColors[0];
  if (nbCases <= 10) return listColors[1];
  if (nbCases <= 30) return listColors[2];
  if (nbCases <= 50) return listColors[3];
  if (nbCases <= 100) return listColors[4];
  if (nbCases <= 200) return listColors[5];
  return listColors[6];
}
