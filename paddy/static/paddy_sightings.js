
function initMap(lat, lng) {
    var location = {lat: -33.981223,lng: 18.485443}
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });


}



// global "map" variable
var map2 = null;
var marker = null;

// popup window for pin, if in use
//var infowindow = new google.maps.InfoWindow({ 
    //size: new google.maps.Size(150,50)
//});

// A function to create the marker and set up the event window function 
function createMarker(latlng, name, html) {

    var contentString = html;

    var marker = new google.maps.Marker({
        position: latlng,
        map: map2,
        });

    //google.maps.event.addListener(marker, 'click', function() {
        //infowindow.setContent(contentString); 
        //infowindow.open(map,marker);
       // });

    google.maps.event.trigger(marker, 'click');    
    return marker;

}

function initialize() {

    // the location of the initial pin
    var myLatlng = new google.maps.LatLng(-33.930266, 18.418581);

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
      title:"Property Location"
    });

    // establish the initial div form fields
    formlat = document.getElementById("latbox").value = myLatlng.lat();
    formlng = document.getElementById("lngbox").value = myLatlng.lng();

    // close popup window
    //google.maps.event.addListener(map2, 'click', function() {
       // infowindow.close();
        //});

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

        //var image = '/images/googlepins/pin2.png';
        var myLatLng = event.latLng ;
        /*  
        var marker = new google.maps.Marker({
            by removing the 'var' subsquent pin placement removes the old pin icon
        */
        marker = new google.maps.Marker({   
            position: myLatLng,
            map: map2,
            title:"Property Location"
        });

        // populate the form fields with lat & lng 
        formlat = document.getElementById("latbox").value = event.latLng.lat();
        formlng = document.getElementById("lngbox").value = event.latLng.lng();

    });

}