import React from 'react';
import KakaoMap from './KakaoMap';

export default function MapComponent({ mapWidth, mapHeight, initCenter }) {
  // console.log('MapComponent');
  return (
    <div>
      {mapWidth > 0 && mapHeight > 0 ? (
        <KakaoMap
          sizeX={mapWidth}
          sizeY={mapHeight}
          initCenter={initCenter}
        ></KakaoMap>
      ) : null}
    </div>
  );
}
