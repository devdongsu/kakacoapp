import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import KakaoMap from './components/KakaoMap';
import MapComponent from './components/MapComponent';
import SearchBox from './components/SearchBox';

export default function MapSearch() {
  const mapAreaDiv = useRef();
  const { searchLat, searchLng } = useSelector(
    (state) => state.mapSlice.searchInfo
  );
  const [mapSize, setMapSize] = useState({
    mapWidth: 0,
    mapHeight: 0,
  });

  useEffect(() => {
    setMapSize({
      mapWidth: mapAreaDiv.current.clientWidth,
      mapHeight: mapAreaDiv.current.clientHeight,
    });
  }, []);

  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <div className="searchArea" style={{ width: '20vw' }}>
          <SearchBox />
        </div>
        <div
          className="mapArea"
          style={{
            flex: '1',
            height: 'calc(100vh - 12rem)',
            marginRight: 0,
          }}
          ref={mapAreaDiv}
          id="mapArea"
        >
          <MapComponent
            mapHeight={mapSize.mapHeight}
            mapWidth={mapSize.mapWidth}
            initCenter={{ searchLat, searchLng }}
          ></MapComponent>
        </div>
      </div>
    </div>
  );
}
