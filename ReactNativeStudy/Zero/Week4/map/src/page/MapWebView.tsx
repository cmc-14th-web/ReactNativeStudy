import { useRef, useEffect } from "react";
import { PermissionsAndroid } from "react-native";
import WebView from "react-native-webview";
import Geolocation from 'react-native-geolocation-service';

import { MAP_WEB_VIEW_LINK } from "../constant/link";

function MapWebView() {
    const mapRef = useRef<any>();

    useEffect(() => {
        PermissionsAndroid.requestMultiple([
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
        ]);
    }, []);

    const postPostion = (position: Geolocation.GeoPosition) => {
        mapRef.current.postMessage(JSON.stringify({
            ...position.coords,
            type: 'map',
        }));
        console.log('postPosition', position.coords)
    }

    const handleMessage = () => {
        Geolocation.getCurrentPosition((position) => {
            postPostion(position);
        });
    }
    return (
        <WebView source={{ uri: MAP_WEB_VIEW_LINK }}
            ref={mapRef}
            onLoadEnd={handleMessage}
        />
    )
}

export default MapWebView;
