(function(){
var map;

$(document).ready(function(){
	initMap();
});

	function initMap() {
	  map = new google.maps.Map(document.getElementById('map'), {
	  	center: {lat: 59.873383, lng: 30.334436},
	    zoom: 16,
	    scrollwheel: false,
	    disableDefaultUI: true,
	    styles: [{
      "featureType": "administrative",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#444444"
      }]
    }, {
      "featureType": "landscape",
      "elementType": "all",
      "stylers": [{
        "color": "#f2f2f2"
      }]
    }, {
      "featureType": "poi",
      "elementType": "all",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "road",
      "elementType": "all",
      "stylers": [{
        "saturation": -100
      }, {
        "lightness": 45
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "all",
      "stylers": [{
        "visibility": "simplified"
      }]
    }, {
      "featureType": "road.arterial",
      "elementType": "labels.icon",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "transit",
      "elementType": "all",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "water",
      "elementType": "all",
      "stylers": [{
        "color": "#ecae46"
      }, {
        "visibility": "on"
      }]
    }],

	  });
	}

})()

/*

var map;

function initMap() {


    var mapOptions = {
        zoom: 13,
        center: new google.maps.LatLng(46.9350775,31.9808681),
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: true,
        disableDefaultUI: true

    };
    //var map = new google.maps.Map(document.getElementById('map'),mapOptions);
    //var marker = new google.maps.Marker({
        //position: new google.maps.LatLng(46.9692071,31.9623972,17),
        //map: map,
        //icon: 'assets/img/map_marker.svg'
    });
}*/