import { FlexSpaceBetweenBox, MainWidthCenterBox } from '@/components/modules/Box';
import { BoldGray9Typography } from '@/components/modules/Typography';
import React from 'react';
import dompurify from 'dompurify';
import { TitleBox } from '../title.style';
import { useRouter } from 'next/router';
import { newsService } from '@/api/news';
import { Button, Table, TableBody, TableCell, TableFooter, TableHead, TableRow } from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import Link from 'next/link';

const NewsContent: React.FC<any> = (props: any): JSX.Element => {
  const router = useRouter()
  const newsId = Number(router.query.newsId)
  const [news, setNews] = React.useState<any>()
  const [prev, setPrev] = React.useState<any>({ id: 0, title: '' })
  const [next, setNext] = React.useState<any>({ id: 0, title: '' })

  React.useEffect(() => {
    (async () => {
      const newsRes = await newsService.getNewsContent(newsId).then(res => res.data);
      const prevRes = await newsService.getPrevNews(newsId).then(res => res.data)
      const nextRes = await newsService.getNextNews(newsId).then(res => res.data)

      if (newsRes) setNews(newsRes)
      if (prevRes) setPrev(prevRes)
      if (nextRes) setNext(nextRes)
    })()
  }, [newsId])

  const newsContent = (content: any) => {
    const sanitizer = dompurify.sanitize;
    return (
      <TableCell
        colSpan={100}
        dangerouslySetInnerHTML={{ __html: sanitizer(content) }}
      />
    )
  }

  return (
    <MainWidthCenterBox>
      <TitleBox>
        <BoldGray9Typography className='title'>
          안전뉴스
        </BoldGray9Typography>
      </TitleBox>
      {news ?
        <Table>
          <TableHead>
            <TableRow>
              <TableCell colSpan={100} sx={{ textAlign: 'left' }}>
                {news.title}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell colSpan={2}>
                작성자: {news.writer}
              </TableCell>
              <TableCell width={'50%'}>
                작성일: {news.publishDate}
              </TableCell>
            </TableRow>
            <TableRow>
              {newsContent(news.content)}
            </TableRow>
            {prev.id != 0 ?
              <TableRow>
                <TableCell width={'15%'}>
                  <FlexSpaceBetweenBox>
                    이전글
                    <KeyboardArrowUp />
                  </FlexSpaceBetweenBox>
                </TableCell>
                <TableCell colSpan={2}>
                  <Link href={`/news/${Number(prev.id)}`}>
                    {prev.title}
                  </Link>
                </TableCell>
              </TableRow>
              : null}
            {next.id != 0 ?
              <TableRow>
                <TableCell>
                  <FlexSpaceBetweenBox>
                    다음글
                    <KeyboardArrowDown />
                  </FlexSpaceBetweenBox>
                </TableCell>
                <TableCell colSpan={2}>
                  <Link href={`/news/${Number(next.id)}`}>
                    {next.title}
                  </Link>
                </TableCell>
              </TableRow>
              : null}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={100}>
                <Button variant='outlined' href='/news'>
                  목차
                </Button>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
        : null}
    </MainWidthCenterBox>
  )
}

export default NewsContent;