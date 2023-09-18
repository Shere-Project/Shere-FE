import React from 'react';
import { Box, IconButton, SvgIcon } from '@mui/material';
import Image from 'next/image';
import { IconBox, MapContainer } from './Map.styles';

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
    if (current) {
      setLocation(new naver.maps.LatLng(current.latitude, current.longitude))
    } else {
      setLocation(new naver.maps.LatLng(37.5666103, 126.9783882))
    }
  }, [current])

  React.useEffect(() => {
    const mapDiv = document.getElementById('map')
    const mapOptions = {
      center: location
    }
    if (!mapDiv) return;
    mapRef.current = new window.naver.maps.Map(mapDiv, mapOptions)
  }, [mapRef, location, data]);

  React.useEffect(() => {
    markers?.forEach(marker => marker.setMap(null))
    markers = data?.map((shelter: any) => {
      markerRef.current = new naver.maps.Marker({
        position: new naver.maps.LatLng(shelter.latitude, shelter.longitude),
        map: mapRef.current
      })
    })

    if (data?.length) {
      const coords = data.map((shelter: any) => new naver.maps.LatLng(shelter.latitude, shelter.longitude))
      let bounds = new naver.maps.LatLngBounds(coords[0], coords[1])
      coords.forEach((latlng) => { bounds.extend(latlng) })
      mapRef.current.fitBounds(bounds)
    }
  }, [mapRef, data])

  const handleClickCurrent = (event: React.MouseEvent) => {
    event.preventDefault()
    mapRef.current.setCenter(location)
  }

  return (
    <>
      <MapContainer>
        <Box
          id='map'
          ref={mapRef}
          style={{ minHeight: '37.5rem' }}
        />
        <IconBox>
          <IconButton onClick={handleClickCurrent}>
            <img src='/icons/current.svg' alt='' />
          </IconButton>
        </IconBox>
      </MapContainer>
    </>
  );
};

export default Map;
