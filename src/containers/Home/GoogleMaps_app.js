import React,{ useEffect, useRef } from "react";

function GoogleMaps_app(){
    const googleMapRef = useRef();

    const createGoogleMap = () =>
        new window.google.maps.Map(googleMapRef.current, {
            zoom: 20,
            center: {
                lat: -31.9780,
                lng:  115.8114,
            },
            disableDefaultUI: true,

            zoomControl: true,
            gestureHandling: 'auto',
            zoomControlOptions: {
                position: window.google.maps.ControlPosition.RIGHT_CENTER,
            },
            mapTypeId: 'satellite',
        });
useEffect(() => {
    createGoogleMap()
}, []);
return( <div id="google-map" ref={googleMapRef} style={{ height: '100%' }}/>
    )}




export default GoogleMaps_app;