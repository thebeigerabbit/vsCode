
var map2 = null;
var marker = null;

function createMarker(latlng, name, html) {

    var contentString = html;

    var marker = new google.maps.Marker({
        position: latlng,
        map: map2,
        });

    google.maps.event.trigger(marker, 'click');    
    return marker;

}

function initialize() {

    // the location of the initial pin
    var myLatlng = new google.maps.LatLng(-34.026494, 18.434491);

    // create the map
    var myOptions = {
        zoom: 11,
        center: myLatlng,
        mapTypeControl: true,
        mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
        navigationControl: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    map2 = new google.maps.Map(document.getElementById("map2"), myOptions);

    marker = new google.maps.Marker({
      position: myLatlng,
      map: map2,
      title:"Property Location"
    });

    formlat = document.getElementById("latbox").value = myLatlng.lat();
    formlng = document.getElementById("lngbox").value = myLatlng.lng();

    google.maps.event.addListener(map2, 'click', function(event) {
         if (marker) {
            marker.setMap(null);
            marker = null;
         }

        var myLatLng = event.latLng ;
       
        marker = new google.maps.Marker({   
            position: myLatLng,
            map: map2,
            title:"Property Location"
        });

        formlat = document.getElementById("latbox").value = event.latLng.lat();
        formlng = document.getElementById("lngbox").value = event.latLng.lng();

    });

}