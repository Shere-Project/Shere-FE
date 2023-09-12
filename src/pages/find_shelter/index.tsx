import { mapService } from '@/api/map';
import { shelterService } from '@/api/shelter';
import React from 'react';

const Shelter: React.FC<any> = (props: any): JSX.Element => {
  const [current, setCurrent] = React.useState()

  React.useEffect(() => {
    (async () => {
      const currentLatLng = await mapService.getCurrentLatLng()
      setCurrent(currentLatLng)
    })();
  }, [])

  return (
    <>
    대피소 찾기 페이지
    </>
  )
}

export default Shelter;