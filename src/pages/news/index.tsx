import { MainWidthCenterBox } from '@/components/modules/Box';
import { BoldGray9Typography, Gray01Typography } from '@/components/modules/Typography';
import React from 'react';
import { TitleBox } from '../title.style';

const News: React.FC<any> = (props: any): JSX.Element => {
  return (
    <MainWidthCenterBox>
      <TitleBox>
        <BoldGray9Typography className='title'>
          안전뉴스
        </BoldGray9Typography>
        <Gray01Typography className='desc'>
          시도, 시군구별로 대피소 정보를 조회하실 수 있습니다
        </Gray01Typography>
        <Gray01Typography className='desc'>
          세종특별자치시는 시군구가 없으므로 읍면동에서 조회하시기 바랍니다.
        </Gray01Typography>
        <Gray01Typography className='desc'>
          지도 아이콘을 클릭하시면 지도를 통해 위치를 확인하실 수 있습니다.
        </Gray01Typography>
      </TitleBox>
    </MainWidthCenterBox>
  )
}

export default News;