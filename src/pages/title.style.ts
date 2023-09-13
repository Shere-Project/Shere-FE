import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const TitleBox = styled(Box)(() => ({
  '& .title': {
    marginBottom: '1.75rem',
    lineHeight: '100%',
  },
  '& .desc': {
    lineHeight: '1.825rem',
    fontSize: '1.68rem',
    fontWeight: 500,
  },
  display: 'grid',
  rowGap: '0.63rem'
}))