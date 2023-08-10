
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
}

//<![CDATA[

    // global "map" variable
    var map2 = null;
    var marker = null;

    // popup window for pin, if in use
    //var infowindow = new google.maps.infowindow({ 
       // size: new google.maps.size(150,50)
        //});

    // A function to create the marker and set up the event window function 
    function createMarker(latlng, name, html) {

    var contentString = html;

    var marker = new google.maps.Marker({
        position: latlng,
        map: map2,
        zIndex: Math.round(latlng.lat()*-100000)<<5
        });

    //google.maps.event.addListener(marker, 'click', function() {
        //infowindow.setContent(contentString); 
       // infowindow.open(map,marker);
       // });

    google.maps.event.trigger(marker, 'click');    
    return marker;

}

function initialize() {

    // the location of the initial pin
    var myLatlng = new google.maps.LatLng(-33.981223, 18.485443);

    // create the map
    var myOptions = {
        zoom: 10,
        center: myLatlng,
        mapTypeControl: true,
        mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
        navigationControl: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    map2 = new google.maps.Map(document.getElementById("map2"), myOptions);

    // establish the initial marker/pin
    marker = new google.maps.Marker({
      position: myLatlng,
      map: map2,
      title:"You Are Here"
    });

    // establish the initial div form fields
    formlat = document.getElementById("latbox").value = myLatlng.lat();
    formlng = document.getElementById("lngbox").value = myLatlng.lng();

    formlat = document.getElementById("current_lat").value = myLatlng.lat();
    formlng = document.getElementById("current_lng").value = myLatlng.lng();

    // close popup window
    //google.maps.event.addListener(map2, 'click', function() {
       // infowindow.close();
       // });

    // removing old markers/pins
    google.maps.event.addListener(map2, 'click', function(event) {
        //call function to create marker
         if (marker) {
            marker.setMap(null);
            marker = null;
         }

        // Information for popup window if you so chose to have one
        /*
         marker = createMarker(event.latLng, "name", "<b>Location</b><br>"+event.latLng);
        */

        var image = '/images/googlepins/pin2.png';
        var myLatLng = event.latLng ;
        /*  
        var marker = new google.maps.Marker({
            by removing the 'var' subsquent pin placement removes the old pin icon
        */
        marker = new google.maps.Marker({   
            position: myLatLng,
            map: map2,
            title:"You Are Here"
        });

        // populate the form fields with lat & lng 
        formlat = document.getElementById("latbox").value = event.latLng.lat();
        formlng = document.getElementById("lngbox").value = event.latLng.lng();

    });

}
