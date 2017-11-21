console.log('im here look at me!!!!');

const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker");


mapboxgl.accessToken = 'pk.eyJ1IjoiaGt3d2ViZXIiLCJhIjoiY2phOXRuaHRmMGJycDJ3cXR5bG43ZnJ3OCJ9.9neIakt1D1GK-lPDN6sh5Q';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});


const marker = buildMarker("activity", [-74.009151, 40.705086]);
marker.addTo(map);

// const markerDomEl = document.createElement("div");
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);
