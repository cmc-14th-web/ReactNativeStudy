import React, {useEffect, useRef} from 'react';

const App = () => {
  const mapElement = useRef(null);

  useEffect(() => {
    // Check if the Naver Maps library is available
    if (!window.naver) {
      console.error('Naver Maps library not loaded');
      return;
    }

    // Check if the map element is available
    if (!mapElement.current) {
      console.error('Map element not found');
      return;
    }

    // Initialize map
    const location = new window.naver.maps.LatLng(37.5656, 126.9769);
    const mapOptions = {
      center: location,
      zoom: 17,
      zoomControl: true,
    };

    const map = new window.naver.maps.Map(mapElement.current, mapOptions);

    // Add a marker to the map
    new window.naver.maps.Marker({
      position: location,
      map,
    });
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <>
      <h1>Naver Map - Default</h1>
      <div
        ref={mapElement}
        style={{
          width: '100px',
          minHeight: '100px',
        }}
      />
    </>
  );
};

export default App;
