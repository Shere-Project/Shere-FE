import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { FullWidthBox, GridBox } from '@/components/modules/Box';

export const IntroBox = styled(Box)(({ theme }) => ({
  '& .title': {
    marginBottom: '1.38rem',
    lineHeight: '135%',
    fontSize: '5.35rem',
  },
  '& .desc': {
    lineHeight: '2.5rem',
    fontSize: '1.68rem'
  },
  '& .em': {
    color: theme.style.Primary
  },
  '& .MuiButton-contained': {
    marginTop: theme.style.px40,
    marginBottom: theme.style.px48,
    borderRadius: '1.875rem',
    width: '7.56rem',
    boxShadow: '8px 8px 8px 0px rgba(248, 90, 71, 0.05)',
    fontSize: '1rem'
  }
}));

export const RoundContainer = styled(Box)(({ theme }) => ({
  borderRadius: '1rem',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  overflow: 'hidden',
}));

export const SummaryBox = styled(Box)(({ theme }) => ({
  margin: '6.25rem auto',
  textAlign: 'center',
  '& .title': {
    marginBottom: '1.88rem',
    lineHeight: '80%',
    fontSize: '3.125rem',
  },
  '& .desc': {
    lineHeight: '1.5rem',
    fontSize: '1.25rem',
  },
  '& .MuiButton-contained': {
    marginTop: theme.style.px44,
    borderRadius: '1.875rem',
    width: '7.56rem',
    boxShadow: '8px 8px 8px 0px rgba(248, 90, 71, 0.05)',
    fontSize: '1rem',
  },
  '& .MuiButton-textPrimary': {
    color: 'black',
    // marginTop: theme.style.px44,
    // borderRadius: '1.875rem',
    // width: '7.56rem',
    // boxShadow: '8px 8px 8px 0px rgba(248, 90, 71, 0.05)',
    fontSize: '0.875rem',
    fontWeight: 800
  }
}));

export const StatsBox = styled(FullWidthBox)(({ theme }) => ({
  display: 'flex',
  padding: '1.8125rem 1.53538rem 1.9375rem 1.54788rem',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.9375rem',
  '& .vlaue': {
    fontSize: '2.5rem',
    fontWeight: 500,
    lineHeight: '4.25rem'
  },
  '& .type': {
    fontSize: '1.125rem',
    fontWeight: 500,
    lineHeight: '1.875rem'
  },
}));