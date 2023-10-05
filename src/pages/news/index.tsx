import { MainWidthCenterBox } from '@/components/modules/Box';
import { BoldGray9Typography, Gray01Typography } from '@/components/modules/Typography';
import React from 'react';
import { TitleBox } from '../title.style';
import { IconButton, Table, TableBody, TableCell, TableFooter, TableHead, TableRow } from '@mui/material';
import { newsService } from '@/api/news';
import { ChevronLeftRounded, ChevronRightRounded } from '@mui/icons-material';
import Link from 'next/link';

const News: React.FC<any> = (props: any): JSX.Element => {
  const [newsData, setNewsData] = React.useState<any>()

  React.useEffect(() => {
    getNewsList(1)
  }, [])

  const handleChangePage = (variant: 'prev' | 'next') => (event: React.MouseEvent) => {
    switch (variant) {
      case 'prev':
        if (!newsData?.hasPrevious) return
        getNewsList(newsData.page - 1);
        break;
      case 'next':
        if (!newsData?.hasNext) return
        getNewsList(newsData.page + 1);
        break;
    }
  }

  const getNewsList = async (pageNum: number) => {
    const newsResult = await newsService.getNewsList(pageNum)
    if (newsResult.data) {
      setNewsData(newsResult.data)
    }
  }

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
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>작성자</TableCell>
            <TableCell>제목</TableCell>
            <TableCell>등록일</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {newsData?.totalCount != 0 ?
            <>
              {newsData?.content.map((news: any, idx: number) => (
                <TableRow key={`news-${idx}`}>
                  <TableCell>
                    {news.writer}
                  </TableCell>
                  <TableCell>
                    <Link href={`/news/${news.id}`}>
                      {news.title}
                    </Link>
                  </TableCell>
                  <TableCell>
                    {news.publishDate}
                  </TableCell>
                </TableRow>
              ))}
            </> : <>
              뉴스 데이터가 존재하지 않습니다
            </>
          }
        </TableBody>
        <TableFooter>
          {newsData?.totalCount != 0 ? <TableRow>
            <TableCell colSpan={100}>
              <IconButton onClick={handleChangePage('prev')}>
                <ChevronLeftRounded />
              </IconButton>
              {newsData?.page} / {newsData?.totalPage}
              <IconButton onClick={handleChangePage('next')}>
                <ChevronRightRounded />
              </IconButton>
            </TableCell>
          </TableRow> : null}
        </TableFooter>
      </Table>
    </MainWidthCenterBox>
  )
}

export default News;