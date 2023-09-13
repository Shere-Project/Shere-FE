import { MainWidthCenterBox } from '@/components/modules/Box';
import { BoldGray9Typography, Gray01Typography } from '@/components/modules/Typography';
import React from 'react';
import { TitleBox } from '../title.style';

const Stats: React.FC<any> = (props: any): JSX.Element => {
  return (
    <MainWidthCenterBox>
      <TitleBox textAlign='center'>
        <BoldGray9Typography className='title'>
          대피소 통계
        </BoldGray9Typography>
        <Gray01Typography className='desc'>
          민방위사태 발생시 주민의 생명과 재산을 보호하기 위하여
        </Gray01Typography>
        <Gray01Typography className='desc'>
          정부지원으로 설치 또는 공공용으로 지정 지하 대피소입니다.
        </Gray01Typography>
        <Gray01Typography className='desc'>
          지진, 해일, 민방위의 대피요령을 확인할 수 있고 이와 관련한 통계자료를 보실 수 있습니다.
        </Gray01Typography>
      </TitleBox>
    </MainWidthCenterBox>
  )
}

export default Stats;