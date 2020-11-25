(function (window,google) {
    //map options
    var options = { center : {
                lat : 37.1234, lng:-122.123451
            },
            zoom : 10},
    element = document.getElementById('map-canvas')
    //map

    map = new google.map.Maps(element, options);

}(window, google));
