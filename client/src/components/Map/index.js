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
import axios from "axios";

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
  {
    data: tunisGeojson,
    name: "Tunis",
    nbCases: 480,
    nbCases: 28,
    dece: 20,
    mort: 20,
    actif: 60,
  },
  { data: gabesGeojson, name: "Gabès" },
  { data: kefGeojson, name: "Kef", nbCases: 8 },
  { data: teuzeurGeojson, name: "Tozeur", nbCases: 5 },
  { data: gafsaGeojson, name: "Gafsa", nbCases: 49 },
  { data: gbelliGeojson, name: "Kébili", nbCases: 108 },
  { data: tatawinGeojson, name: "Tataouine", nbCases: 37 },
  { data: medninGeojson, name: "Médenine", nbCases: 92 },
  { data: sfaxGeojson, name: "Sfax", nbCases: 38 },
  { data: bouzidGeojson, name: "Sidi Bouzid", nbCases: 10 },
  { data: gasrinGeojson, name: "Kasserine", nbCases: 9 },
  { data: mahdiaGeojson, name: "Mahdia", nbCases: 20 },
  { data: monastirGeojson, name: "Monastir", nbCases: 44 },
  { data: sousseGeojson, name: "Sousse", nbCases: 90 },
  { data: quoroinGeojson, name: "Kairouan", nbCases: 10 },
  { data: siliyanaGeojson, name: "Siliana", nbCases: 4 },
  { data: zaghwenGeojson, name: "Zaghouan", nbCases: 3 },
  { data: nabeulGeojson, name: "Nabeul", nbCases: 18 },
  { data: jandoubaGeojson, name: "Jendouba", nbCases: 1 },
  { data: bejaGeojson, name: "Béja", nbCases: 5 },
  { data: benzartGeojson, name: "Bizerte", nbCases: 28 },
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
const getInfo = (setState) => {
  const url =
    "https://apple-reviews.herokuapp.com/getTunisia?fbclid=IwAR0Q-dYRphQ_XAKmkoDE20WC2OVlxHD8TFg0mQujVMRDPm5HEL43kT2Fj-A";
  return axios
    .get(url)
    .then((res) => {
      const t = res.data.result;
      const T = [
        {
          data: tunisGeojson,
          name: "Tunis",
          nbCases:
            parseInt(t[0][1]) +
            parseInt(t[8][1]) +
            parseInt(t[2][1]) +
            parseInt(t[3][1]),
          dece:
            parseInt(t[0][2]) +
            parseInt(t[8][2]) +
            parseInt(t[2][2]) +
            parseInt(t[3][2]),
          mort:
            parseInt(t[0][3]) +
            parseInt(t[8][3]) +
            parseInt(t[2][3]) +
            parseInt(t[3][3]),
          actif:
            parseInt(t[0][4]) +
            parseInt(t[8][4]) +
            parseInt(t[2][4]) +
            parseInt(t[3][4]),
        },
        {
          data: gabesGeojson,
          name: t[11][0],
          nbCases: parseInt(t[11][1]),
          dece: parseInt(t[11][2]),
          mort: parseInt(t[11][3]),
          actif: parseInt(t[11][4]),
        },
        {
          data: kefGeojson,
          name: t[18][0],
          nbCases: parseInt(t[18][1]),
          dece: parseInt(t[18][2]),
          mort: parseInt(t[18][3]),
          actif: parseInt(t[18][4]),
        },
        {
          data: teuzeurGeojson,
          name: t[20][0],
          nbCases: parseInt(t[20][1]),
          dece: parseInt(t[20][2]),
          mort: parseInt(t[20][3]),
          actif: parseInt(t[20][4]),
        },
        {
          data: gafsaGeojson,
          name: t[6][0],
          nbCases: parseInt(t[6][1]),
          dece: parseInt(t[6][2]),
          mort: parseInt(t[6][3]),
          actif: parseInt(t[6][4]),
        },
        {
          data: gbelliGeojson,
          name: t[1][0],
          nbCases: parseInt(t[1][1]),
          dece: parseInt(t[1][2]),
          mort: parseInt(t[1][3]),
          actif: parseInt(t[1][4]),
        },
        {
          data: tatawinGeojson,
          name: t[10][0],
          nbCases: parseInt(t[10][1]),
          dece: parseInt(t[10][2]),
          mort: parseInt(t[10][3]),
          actif: parseInt(t[10][4]),
        },
        {
          data: medninGeojson,
          name: t[4][0],
          nbCases: parseInt(t[4][1]),
          dece: parseInt(t[4][2]),
          mort: parseInt(t[4][3]),
          actif: parseInt(t[4][4]),
        },
        {
          data: sfaxGeojson,
          name: t[9][0],
          nbCases: parseInt(t[9][1]),
          dece: parseInt(t[9][2]),
          mort: parseInt(t[9][3]),
          actif: parseInt(t[9][4]),
        },
        {
          data: bouzidGeojson,
          name: t[15][0],
          nbCases: parseInt(t[15][1]),
          dece: parseInt(t[15][2]),
          mort: parseInt(t[15][3]),
          actif: parseInt(t[15][4]),
        },
        {
          data: gasrinGeojson,
          name: t[17][0],
          nbCases: parseInt(t[17][1]),
          dece: parseInt(t[17][2]),
          mort: parseInt(t[17][3]),
          actif: parseInt(t[17][4]),
        },
        {
          data: mahdiaGeojson,
          name: t[13][0],
          nbCases: parseInt(t[13][1]),
          dece: parseInt(t[13][2]),
          mort: parseInt(t[13][3]),
          actif: parseInt(t[13][4]),
        },
        {
          data: monastirGeojson,
          name: t[7][0],
          nbCases: parseInt(t[7][1]),
          dece: parseInt(t[7][2]),
          mort: parseInt(t[7][3]),
          actif: parseInt(t[7][4]),
        },
        {
          data: sousseGeojson,
          name: t[5][0],
          nbCases: parseInt(t[5][1]),
          dece: parseInt(t[5][2]),
          mort: parseInt(t[5][3]),
          actif: parseInt(t[5][4]),
        },
        {
          data: quoroinGeojson,
          name: t[16][0],
          nbCases: parseInt(t[16][1]),
          dece: parseInt(t[16][2]),
          mort: parseInt(t[16][3]),
          actif: parseInt(t[16][4]),
        },
        {
          data: siliyanaGeojson,
          name: t[21][0],
          nbCases: parseInt(t[21][1]),
          dece: parseInt(t[21][2]),
          mort: parseInt(t[21][3]),
          actif: parseInt(t[21][4]),
        },
        {
          data: zaghwenGeojson,
          name: t[22][0],
          nbCases: parseInt(t[22][1]),
          dece: parseInt(t[22][2]),
          mort: parseInt(t[22][3]),
          actif: parseInt(t[22][4]),
        },
        {
          data: nabeulGeojson,
          name: t[14][0],
          nbCases: parseInt(t[14][1]),
          dece: parseInt(t[14][2]),
          mort: parseInt(t[14][3]),
          actif: parseInt(t[14][4]),
        },
        {
          data: jandoubaGeojson,
          name: t[23][0],
          nbCases: parseInt(t[23][1]),
          dece: parseInt(t[23][2]),
          mort: parseInt(t[23][3]),
          actif: parseInt(t[23][4]),
        },
        {
          data: bejaGeojson,
          name: t[19][0],
          nbCases: parseInt(t[19][1]),
          dece: parseInt(t[19][2]),
          mort: parseInt(t[19][3]),
          actif: parseInt(t[19][4]),
        },
        {
          data: benzartGeojson,
          name: t[12][0],
          nbCases: parseInt(t[12][1]),
          dece: parseInt(t[12][2]),
          mort: parseInt(t[12][3]),
          actif: parseInt(t[12][4]),
        },
      ];
      console.log({ T });
      setState(T);
    })
    .catch((err) => alert(err));
};

export default function SimpleExample() {
  const [myLocation, setMyLocation] = useState(staticLocation);
  const [covidCases, setCovidCases] = useState(listGeojsons);
  const [zoom, setZoom] = useState(6);

  console.log({ total: listGeojsons.totalCases });
  const setLocation = (lat, lng) => {
    setMyLocation({ lat, lng });
  };
  useEffect(() => {
    getInfo(setCovidCases);
  }, []);
  console.log({ tunisiaGeojson });
  /*
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
  }, []);*/
  const position = [myLocation.lat, myLocation.lng];
  return (
    <Map center={position} zoom={zoom} style={{ height: 400 }}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url={
          true
            ? "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            : "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
        }
      />
      {false && (
        <Marker position={position} icon={getStatusIcon(-1)}>
          <Popup>Your Location</Popup>
        </Marker>
      )}
      {false &&
        covidCases.map((cc) => (
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
      {covidCases.map((el, index) => (
        <GeoJSON
          data={el.data}
          onClick={() => console.log(el.name)}
          style={() => ({
            fillColor: getColor(el.nbCases, listGeojsons.totalCases),
            color: "#fff",
            weight: 1,
            opacity: 1,
          })}
        >
          <Popup>
            <p>Nom:{el.name}</p>
            <p>Total cas:{el.nbCases}</p>
            <p>Retablis :{el.dece}</p>
            <p>Décèsé :{el.mort}</p>
            <p>Cas actif :{el.actif}</p>
          </Popup>
        </GeoJSON>
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
