import React from 'react';
import { useRouter } from 'next/router';


const Map: React.FC<any> = (props: any): JSX.Element => {
  // const router = useRouter();
  const [current, setCurrent] = React.useState<any>();

  // React.useEffect(() => {
  //   console.log(current)
  // }, [current])

  React.useEffect(() => {
    (async () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          setCurrent(position.coords)
        });
      }
      else {
        console.log("Geolocation Not supported Required");
      }

      // const current = props.current

      const mapDiv = document.getElementById('map')
      const mapOptions = {
        center: current ? new naver.maps.LatLng(current.latitude, current.longitude) : new naver.maps.LatLng(37.5666103, 126.9783882)
      }
      if (!mapDiv) return;
      const map = new window.naver.maps.Map(mapDiv, mapOptions)

    })();
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
  }, []);

  return (
    <>
      <div>
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
