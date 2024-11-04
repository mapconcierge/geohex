/// COPYRIGHT 2013 GEOHEX Inc. ///

var style1 = [
  {
    "elementType": "geometry.fill",
    "stylers": [
      { "visibility": "on" },
      { "invert_lightness": true },
      { "color": "#002a00" },
 //     { "lightness": -10 }
    ]
  },{
    "featureType": "water",
    "stylers": [
      { "color": "#000000" }
    ]
  },{
    "elementType": "labels",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "administrative",
    "elementType": "labels.icon",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "elementType": "geometry.stroke",
    "stylers": [
      { "color": "#00b800" },
      { "weight": 0.5 }
    ]
  },{
    "featureType": "road",
    "stylers": [
      { "color": "#0a1f0a" }
    ]
  },{
    "featureType": "transit.line",
    "elementType": "geometry.stroke",
    "stylers": [
      { "visibility": "on" },
      { "color": "#109310" },
      { "weight": 0.4}
    ]
  },{
    "featureType": "transit.line",
    "elementType": "geometry.fill",
    "stylers": [
      { "visibility": "on" },
      { "color": "#006700" }
    ]
  },{
    "featureType": "poi",
    "elementType": "geometry.fill",
    "stylers": [
      { "color": "#306530" },
      { "lightness": -42 }
    ]
  },{
    "featureType": "poi.business",
    "elementType": "geometry",
    "stylers": [
      { "color": "#126612" },
   //   { "lightness": 25 }
    ]
  },{
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      { "visibility": "on" },
      { "color": "#155615" }
    ]
  },{
    "featureType": "administrative.province",
    "elementType": "labels",
    "stylers": [
      { "visibility": "on" },
      { "invert_lightness": true }
    ]
  },{
    "featureType": "administrative.province",
    "elementType": "geometry.stroke",
    "stylers": [
      { "visibility": "on" },
      { "color": "#4dae4d" },
      { "weight": 0.7 }
    ]
  },{
    "featureType": "administrative.country",
    "elementType": "labels.text.fill",
    "stylers": [
      { "visibility": "on" },
      { "color": "#ffffff" }
    ]
  },{
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry.stroke",
    "stylers": [
      { "visibility": "on" },
      { "color": "#097c00" }
    ]
  },{
    "featureType": "transit.station",
    "elementType": "labels.text",
    "stylers": [
      { "invert_lightness": true },
      { "visibility": "on" },
//      { "saturation": -100 }
    ]
  },{
    "featureType": "administrative.country",
    "elementType": "geometry.stroke",
    "stylers": [
      { "color": "#000000" },
      { "visibility": "on" },
      { "weight": 1.5 }
    ]
  },{
    "featureType": "transit.station",
    "elementType": "labels.text.fill",
    "stylers": [
      { "visibility": "on" },
      { "color": "#2fb90f" }
    ]
  },{
    "featureType": "administrative.province",
    "elementType": "labels.text.fill",
    "stylers": [
      { "color": "#58ff58" }
    ]
  },{
    "featureType": "poi",
    "elementType": "geometry.stroke",
    "stylers": [
      { "color": "#006600" },
      { "weight": 0.5 }
    ]
  },{
    "featureType": "landscape.man_made",
    "elementType": "geometry.stroke",
    "stylers": [
      { "color": "#006600" },
      { "weight": 0.5 }
    ]
  },{
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      { "visibility": "on" },
      { "color": "#0a290a" }
    ]
  },{
    "featureType": "transit.station",
    "elementType": "geometry.stroke",
    "stylers": [
      { "color": "#00b800" },
      { "weight": 0.5 }
    ]
  }
];

var style2 = [
  {
    "elementType": "geometry.fill",
    "stylers": [
      { "visibility": "on" },
      { "invert_lightness": true },
      { "color": "#002a00" },
 //     { "lightness": -10 }
    ]
  },{
    "featureType": "water",
    "stylers": [
      { "color": "#000000" }
    ]
  },{
    "elementType": "labels",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "administrative",
    "elementType": "labels.icon",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "elementType": "geometry.stroke",
    "stylers": [
      { "color": "#00b800" },
      { "weight": 0.5 }
    ]
  },{
    "featureType": "road",
    "stylers": [
      { "color": "#0a1f0a" }
    ]
  },{
    "featureType": "transit.line",
    "elementType": "geometry.stroke",
    "stylers": [
      { "visibility": "on" },
      { "color": "#109310" },
      { "weight": 0.4}
    ]
  },{
    "featureType": "transit.line",
    "elementType": "geometry.fill",
    "stylers": [
      { "visibility": "on" },
      { "color": "#006700" }
    ]
  },{
    "featureType": "poi",
    "elementType": "geometry.fill",
    "stylers": [
      { "color": "#306530" },
      { "lightness": -42 }
    ]
  },{
    "featureType": "poi.business",
    "elementType": "geometry",
    "stylers": [
      { "color": "#126612" },
   //   { "lightness": 25 }
    ]
  },{
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      { "visibility": "on" },
      { "color": "#155615" }
    ]
  },{
    "featureType": "administrative.province",
    "elementType": "geometry.stroke",
    "stylers": [
      { "visibility": "on" },
      { "color": "#4dae4d" },
      { "weight": 0.7 }
    ]
  },{
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry.stroke",
    "stylers": [
      { "visibility": "on" },
      { "color": "#097c00" }
    ]
  },{
    "featureType": "administrative.country",
    "elementType": "geometry.stroke",
    "stylers": [
      { "color": "#000000" },
      { "visibility": "on" },
      { "weight": 1.5 }
    ]
  },{
    "featureType": "poi",
    "elementType": "geometry.stroke",
    "stylers": [
      { "color": "#006600" },
      { "weight": 0.5 }
    ]
  },{
    "featureType": "landscape.man_made",
    "elementType": "geometry.stroke",
    "stylers": [
      { "color": "#006600" },
      { "weight": 0.5 }
    ]
  },{
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      { "visibility": "on" },
      { "color": "#0a290a" }
    ]
  },{
    "featureType": "transit.station",
    "elementType": "geometry.stroke",
    "stylers": [
      { "color": "#00b800" },
      { "weight": 0.5 }
    ]
  }
];