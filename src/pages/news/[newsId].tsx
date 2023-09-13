import { MainWidthCenterBox } from '@/components/modules/Box';
import { BoldGray9Typography, Gray01Typography } from '@/components/modules/Typography';
import React from 'react';
import { TitleBox } from '../title.style';

const NewsContent: React.FC<any> = (props: any): JSX.Element => {
  return (
    <MainWidthCenterBox>
      <TitleBox>
        <BoldGray9Typography className='title'>
          안전뉴스
        </BoldGray9Typography>
      </TitleBox>
    </MainWidthCenterBox>
  )
}

export default NewsContent;