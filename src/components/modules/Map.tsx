import React from 'react';
import { Box } from '@mui/material';
import { TownShelters } from '@/api/shelter';

interface MapProps {
  current?: { latitude: number; longitude: number }
  type?: string
  data?: Array<any>
}

const Map: React.FC<MapProps> = ({
  current,
  type,
  data
}): JSX.Element => {
  const [location, setLocation] = React.useState<naver.maps.LatLng | undefined>()

  const mapRef = React.useRef<HTMLElement | null | any>(null);
  const markerRef = React.useRef<any | null>(null);
  let markers: Array<any> | undefined = [];

  React.useEffect(() => {
    const location = data?.length ?
      new naver.maps.LatLng(data[0].latitude, data[0].longitude)
      : current ?
        new naver.maps.LatLng(current.latitude, current.longitude)
        : new naver.maps.LatLng(37.5666103, 126.9783882)

    const mapDiv = document.getElementById('map')
    const mapOptions = {
      center: location
    }
    if (!mapDiv) return;
    mapRef.current = new window.naver.maps.Map(mapDiv, mapOptions)

    // markers?.forEach(marker => marker.setMap(null))
    // markers = data?.map((shelter: any) => {
    //   markerRef.current = new naver.maps.Marker({
    //     position: new naver.maps.LatLng(shelter.latitude, shelter.longitude),
    //     map: mapRef.current
    //   })
    // })
  }, [mapRef, current, data]);

  React.useEffect(() => {
    markers?.forEach(marker => marker.setMap(null))
    markers = data?.map((shelter: any) => {
      markerRef.current = new naver.maps.Marker({
        position: new naver.maps.LatLng(shelter.latitude, shelter.longitude),
        map: mapRef.current
      })
    })
  }, [mapRef, data])

  return (
    <>
      <Box>
        <Box
          id='map'
          ref={mapRef}
          style={{ minHeight: '400px' }}
        />
      </Box>
    </>
  );
};

export default Map;
