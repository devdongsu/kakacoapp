/* global kakao */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useRef } from 'react';

// KakaoMap.propTypes = {
//   sizeX: PropTypes.string.isRequired,
//   sizeY: PropTypes.string.isRequired,
//   initCenter: PropTypes.string.isRequired,
// };

const { kakao } = window;

function KakaoMap({ sizeX, sizeY, initCenter }) {
  const mapDomRef = useRef('');
  const { searchResultList } = useSelector(
    (state) => state.mapSlice.searchInfo
  );

  function setMakers(markers, map) {
    markers.map((marker) => {
      marker.setMap(map);

      return null;
    });
  }

  // 인포윈도우를 표시하는 클로저를 만드는 함수입니다
  function makeOverListener(map, marker, infowindow) {
    return function () {
      infowindow.open(map, marker);
    };
  }

  // 인포윈도우를 닫는 클로저를 만드는 함수입니다
  function makeOutListener(infowindow) {
    return function () {
      infowindow.close();
    };
  }

  useEffect(() => {
    const imageSrc =
      'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png'; // 마커 이미지 주소
    // const imageSize = new kakao.maps.Size(24, 35); // 마커 이미지 사이즈
    // const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
    const container = mapDomRef.current; // 맵을 그릴 돔
    const markers = [];

    const options = {
      center: new window.kakao.maps.LatLng(
        parseFloat(initCenter.searchLat),
        parseFloat(initCenter.searchLng)
      ),
      level: 2,
    };

    const map = new kakao.maps.Map(container, options); // 지도 생성

    // 마커를 생성합니다
    searchResultList &&
      searchResultList.map((list) => {
        const infoWindow = new kakao.maps.InfoWindow({
          content: list.place_name,
        });
        const marker = new kakao.maps.Marker({
          // map: map, // 마커를 표시할 지도
          position: new kakao.maps.LatLng(
            parseFloat(list.y),
            parseFloat(list.x)
          ), // 마커를 표시할 위치
          title: list.place_name, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
          // image: markerImage, // 마커 이미지
        });

        // 마우스 오버 이벤트 등록
        kakao.maps.event.addListener(
          marker,
          'mouseover',
          makeOverListener(map, marker, infoWindow)
        );

        // 마우스 아웃 이벤트 등록
        kakao.maps.event.addListener(
          marker,
          'mouseout',
          makeOutListener(infoWindow)
        );

        markers.push(marker);

        return null;
      });

    console.log('searchResultList', searchResultList);

    setMakers(markers, null);
    setMakers(markers, map);
    return () => (container.innerHTML = ''); // 현재 컴포넌트가 Unmount 될시 지도 제거
  }, [initCenter, searchResultList]);

  return (
    <div className="Map">
      <div
        className="MapContainer"
        ref={mapDomRef}
        style={{ width: sizeX, height: sizeY }}
      ></div>
    </div>
  );
}

export default KakaoMap;
