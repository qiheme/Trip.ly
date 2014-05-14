// set the directionsDisplay in the global namespace to call in the calcRoute function
// set the directions object to call in the calcRoute function
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();

function initialize() {
  // the directions display render object is called here
  directionsDisplay = new google.maps.DirectionsRenderer();
  // setting the parameters to pass to the map that is displayed on page load
  var mapOptions = {
    zoom: 4,
    center: new google.maps.LatLng(40.0000, -100.0000)
  };
  // map object is created here
  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
  // map is displayed by calling set map on the directions renderer
  directionsDisplay.setMap(map);
}

function calcRoute() {
  // sets the start and end addresses to pass into our directions function
  var start = $('input#start').val();
  var end = $('input#finish').val();
  // the parameters passed to the request hash
  var request = {
    origin: start,
    destination: end,
    travelMode: google.maps.TravelMode.TRANSIT
  };
  // request hash params are passed here and if the directions exist
  // they are rendered in the directionsPanel div and map canvas
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    }
  });
  directionsDisplay.setPanel(document.getElementById('directionsPanel'));
}

google.maps.event.addDomListener(window, 'load', initialize);


// function to display the start and end address once the form is submitted
$('form#addresses').submit( function (e) {
  $('div#begin').empty();
  $('div#end').empty();
  var startValue = $('input#start').val();
  var finishValue = $('input#finish').val();
  $('<h1>').text("Starting Address: " + startValue).appendTo('div#begin')
  $('<h1>').text("End Address: " + finishValue).appendTo('div#end')
  e.preventDefault();
  calcRoute();
});
