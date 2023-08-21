import { styled } from '@mui/material/styles';
import { FlexColumnBox } from './modules/Box';
import { Box } from '@mui/material';

export const FooterBox = styled(Box)(({ theme }) => ({
  bottom: 0,
  left: 0,
  // height: theme.style.FooterHeight,
  marginTop: theme.spacing(25),
  padding: theme.spacing(7.5),
  backgroundColor: theme.style.backGroundGray,
}));

export const FooterInnerBox = styled(FlexColumnBox)(({ theme }) => ({
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 2,
  whiteSpace: 'nowrap',
}));

export const FooterTextBox = styled(FlexColumnBox)(({ theme }) => ({
  marginTop: theme.spacing(7.5),
  marginBottom: theme.spacing(7.5),
  gap: '1.31rem',
  '& .MuiTypography-root': {
    textAlign: 'center',
    fontSize: '1rem',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 'normal',
  }
}))