import { useRef, useEffect } from "react";
import { PermissionsAndroid } from "react-native";
import WebView from "react-native-webview";
import Geolocation from 'react-native-geolocation-service';

import { MAP_WEB_VIEW_LINK } from "../constant/link";
import { Position } from "../type/bookmark";
import { useRecoilState } from "recoil";
import { bookmarkState } from "../state/bookmark";

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
    }

    const handlePostPosition = () => {
        Geolocation.getCurrentPosition((position) => {
            postPostion(position);
        });
    }

    const getID = (position: Position) => `${position.lat}-${position.lng}`;
    const [bookmark, setBookmark] = useRecoilState(bookmarkState);

    const saveBookmark = (position: Position) => {
        const id = getID(position);
        const isBookmarked = bookmark.some(bookmark => bookmark.id === id);

        if (isBookmarked) {
            return;
        }

        setBookmark(bookmark => [...bookmark, { ...position, id }]);
    };

    const handleMessage = (event: any) => {
        const message = event.nativeEvent.data;
        const data = JSON.parse(message);

        if (data.type === 'saveBookmark') {
            const position = data.payload;
            console.log(position)
            saveBookmark(position);
        }
    }

    return (
        <WebView source={{ uri: MAP_WEB_VIEW_LINK }}
            ref={mapRef}
            onLoadEnd={handlePostPosition}
            onMessage={handleMessage}
        />
    )
}

export default MapWebView;
