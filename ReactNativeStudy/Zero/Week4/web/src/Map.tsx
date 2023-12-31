import { useEffect } from "react";
const { kakao } = window;

function Map() {
    function loadMap() {
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
            level: 3
        };
        const map = new kakao.maps.Map(container, options);
        return map;
    }

    useEffect(() => {
        loadMap();
    }, [])

    return (
        <div id="map" />
    );
}

export default Map;
