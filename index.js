function initMap() {
    var southeastUS = {
        lat: 33.248,
        lng: -83.441,
    };

    const map = new google.maps.Map(
        document.getElementById('mapContainer'), {zoom: 6, center: southeastUS})
    
    for (i=0; i < stateCapitolsArray.length; i++) {
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(stateCapitolsArray[i].lat, stateCapitolsArray[i].long),
            map: map
        })
    }
}

