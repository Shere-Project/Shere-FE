import React, { useState } from 'react';
import { RoundContainer, IntroBox, SummaryBox, StatsBox } from './home.style';
import { BoldGray9Typography, BoldTypography, Gray01Typography } from '@/components/modules/Typography';
import { GridBox, MainWidthCenterBox } from '@/components/modules/Box';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Skeleton, Typography } from '@mui/material';
import Map from "../components/modules/Map";
import { ArrowForward } from '@mui/icons-material';

const Home: React.FC<any> = (props: any): JSX.Element => {
  const [stats, setStats] = useState({
    shelterCount: undefined,
    dailySearch: undefined,
    weeklySearch: undefined
  });
  const [isLoading, setIsLoading] = useState(true)

  const instInfo: Array<{ imgsrc: string; title: string; desc: string; url: string; }> = [
    {
      imgsrc: '/img/eq.jpg',
      title: '지진',
      desc: '지구적인 힘에 의하여 땅속의 거대한 암반이 갑자기 갈라지면서 그 충격으로 땅이 흔들리는 현상',
      url: '/instructions'
    },
    {
      imgsrc: '/img/tsu.jpg',
      title: '지진해일',
      desc: '해저에서의 지진, 해저 화산 폭발, 단층 운동 같은 급격한 지각변동 등으로 발생하는 파장이 긴 천해파',
      url: '/instructions'
    },
    {
      imgsrc: '/img/cd.jpg',
      title: '민방위',
      desc: '적국의 침략이나 천재지변으로 인명과 재산에 입을 피해를 최소한으로 방지하고자 법에 의해서 실시되는 민간인의 비군사적 국토 방위.',
      url: '/instructions'
    }
  ];

  return (
    <>
      {/* <Map /> */}
      <MainWidthCenterBox>
        <IntroBox>
          <BoldGray9Typography className='title'>
            주변에 있는 <span className='em'>대피소</span>를<br />
            확인하세요
          </BoldGray9Typography>
          <Gray01Typography className='desc'>
            민방위사태 발생시 주민의 생명과 재산을 보호하기 위하여<br />
            정부지원으로 설치 또는 공공용으로 지정 지하 대피소입니다.
          </Gray01Typography>
          <Button
            variant='contained'
            href='/find_shelter'
          >
            자세히 보기
          </Button>
        </IntroBox>
        <RoundContainer>
          <Map />
        </RoundContainer>
        <SummaryBox>
          <RoundContainer
            sx={{
              paddingY: '6.31rem',
              backgroundImage: `url(img/img02.jpg)`,
              textAlign: 'center'
            }}
          >
            <BoldTypography className='title' sx={{ color: 'white' }}>
              대피소 프로젝트
            </BoldTypography>
            <Typography className='desc' sx={{ color: 'white', fontSize: '1.375rem !important' }}>
              민방위사태 발생시 주민의 생명과 재산을 보호하기 위하여<br />
              정부지원으로 설치 또는 공공용으로 지정 지하 대피소입니다
            </Typography>
          </RoundContainer>
        </SummaryBox>
        <SummaryBox>
          <BoldTypography className='title'>
            근처의 수용가능한 대피소
          </BoldTypography>
          <Gray01Typography className='desc'>
            근처의 대피소를 확인하여 가까운 곳으로 대피하세요
          </Gray01Typography>
          <GridBox
            marginTop='2.5rem'
            gridTemplateColumns={'repeat(5, 1fr)'}
            columnGap='2.5rem'
          >
            {isLoading ? <Box>
              <Skeleton animation="wave" height='14rem' />
              <Skeleton animation="wave" height='1.4rem' />
              <Skeleton animation="wave" height='1.4rem' width='30%' />
            </Box> : <></>}
          </GridBox>
        </SummaryBox>
        <SummaryBox>
          <BoldTypography className='title'>
            행동요령
          </BoldTypography>
          <Gray01Typography className='desc'>
            행동요령을 숙지하여 인명과 재산피해 전에 미리 대피하세요
          </Gray01Typography>
          <GridBox sx={{
            marginTop: '2.5rem',
            columnGap: '2.19rem',
            gridTemplateColumns: `repeat(${instInfo.length}, 1fr)`
          }}>
            {instInfo.map((type, idx) => (
              <RoundContainer key={`inst-${idx}`} sx={{ border: '1px solid #DBDBDB' }}>
                <Card>
                  <CardMedia
                    sx={{ height: '20.687rem' }}
                    image={type.imgsrc}
                  />
                  <CardContent sx={{ textAlign: 'left' }} >
                    <Typography sx={{
                      color: 'black',
                      fontSize: '1.625rem',
                      fontWeight: 500
                    }}>
                      {type.title}
                    </Typography>
                    <Gray01Typography className='desc'>
                      {type.desc}
                    </Gray01Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      variant='text'
                      endIcon={<ArrowForward />}
                      href={type.url}
                    >
                      더보기
                    </Button>
                  </CardActions>
                </Card>
              </RoundContainer>
            ))}
          </GridBox>
        </SummaryBox>
        <SummaryBox>
          <BoldTypography className='title'>
            대피소 통계자료
          </BoldTypography>
          <Gray01Typography className='desc'>
            지역별 대피소 수와 검색량등 관련한 통계자료를 확인할 수 있습니다
          </Gray01Typography>
          <GridBox
            marginTop='2.5rem'
            gridTemplateColumns={'1fr 1fr 1fr'}
          >
            <StatsBox>
              <BoldTypography className='value'>
                {stats.shelterCount ?? '0'}
              </BoldTypography>
              <Typography className='type'>
                국내 대피소 수
              </Typography>
            </StatsBox>
            <StatsBox>
              <BoldTypography className='value'>
                {stats.dailySearch ?? '0'}
              </BoldTypography>
              <Typography className='type'>
                오늘 검색량
              </Typography>
            </StatsBox>
            <StatsBox>
              <BoldTypography className='value'>
                {stats.weeklySearch ?? '0'}
              </BoldTypography>
              <Typography className='type'>
                주간 누적 검색량
              </Typography>
              <Gray01Typography fontSize={'0.94rem'}>
                이전 7일기준
              </Gray01Typography>
            </StatsBox>
          </GridBox>
          <Button
            variant='contained'
            color='secondary'
            href='/statistics'
          >
            자세히 보기
          </Button>
        </SummaryBox>
      </MainWidthCenterBox>
    </>
  );
};

export default Home;
