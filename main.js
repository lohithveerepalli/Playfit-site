let map;
let markers = [];

function initMap() {
  const center = { lat: 37.7749, lng: -122.4194 }; // San Francisco as default
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center,
  });
}

function postLocation() {
  const gameName = document.getElementById('game').value;
  const locationName = document.getElementById('location').value;

  if (!gameName || !locationName) {
    alert('Please enter the game name and location.');
    return;
  }

  // Assuming you've got the latitude and longitude for the location.
  // In a real-world scenario, you might use Geocoding to convert location names to coordinates.
  const latLng = { lat: 37.7749, lng: -122.4194 }; // Dummy coordinates for San Francisco
  
  const marker = new google.maps.Marker({
    position: latLng,
    map,
    title: `${gameName} at ${locationName}`
  });
  
  markers.push(marker);
  
  // Clear the form
  document.getElementById('game').value = '';
  document.getElementById('location').value = '';
}
  
// Initialize map
window.onload = function () {
  initMap();
}
