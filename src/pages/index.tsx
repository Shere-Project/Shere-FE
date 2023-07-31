import React from 'react';
import { useRouter } from 'next/router';


const Map: React.FC<any> = (props: any): JSX.Element => {
  const router = useRouter();


  React.useEffect(() => {
    // const mapDiv = React.useRef(null);
    // const { naver } = window;
    // if (!mapDiv.current || !naver) return;

    // // 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어줍니다.
    // const location = new naver.maps.LatLng(37.5656, 126.9769);
    // const mapOptions: naver.maps.MapOptions = {
    //   center: location,
    //   zoom: 17,
    //   zoomControl: true,
    //   zoomControlOptions: {
    //     position: naver.maps.Position.TOP_RIGHT,
    //   },
    // };
    // const map = new naver.maps.Map(mapDiv.current, mapOptions);
    // new naver.maps.Marker({
    //   position: location,
    //   map,
    // });
    const mapDiv = document.getElementById('map')
    if (!mapDiv) return;
    const map = new window.naver.maps.Map(mapDiv)
  }, []);

  return (
    <>
      <h1>Naver Map test!</h1>
      <div
      >
        <div
          id='map'
          // ref={mapElement}
          style={{ minHeight: '400px' }}
        />
      </div>
    </>
  );
};

export default Map;
