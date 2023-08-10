
navigator.geolocation.getCurrentPosition(
    function (position) {
       initMap(position.coords.latitude, position.coords.longitude)
    },
    function errorCallback(error) {
       console.log(error)
    }
 );

function initMap(lat, lng) {
    var location = {lat: -33.981223,lng: 18.485443}
    var myLatLng = {
        lat,
        lng
     };
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
    var map2 = new google.maps.Map(document.getElementById("map2"), {
        zoom: 12,
        center: myLatLng
    });
    var marker2 = new google.maps.Marker({
        position: myLatLng,
        map: map2,
        draggable: true,
        animation: google.maps.Animation.DROP,
        title:"Drag me!"
    });
    //get marker position and store in hidden input
    google.maps.event.addListener(marker2, 'dragend', function (evt) {
        document.getElementById("latInput").value = evt.latLng.lat().toFixed(3);
        document.getElementById("lngInput").value = evt.latLng.lng().toFixed(3);
    });
    google.maps.event.addDomListener(map_location, "click", function (evt) {
        document.getElementById("latInput").value = evt.latLng.lat().toFixed(3);
        document.getElementById("lngInput").value = evt.latLng.lng().toFixed(3);
      });
};