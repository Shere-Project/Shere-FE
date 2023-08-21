import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const HeaderBox = styled(Box)(({ theme }) => ({
  position: 'sticky',
  top: 0,
  left: 0,
  height: theme.style.HeaderHeight,
  zIndex: 2,
  whiteSpace: 'nowrap',
  overflow: 'hidden'
}));

export const HeaderInnerBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  height: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '0 auto',
  paddingLeft: theme.spacing(6.25),
  paddingRight: theme.spacing(6.25)
}));

export const HeaderMenuContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  columnGap: 40,
  color: theme.style.textGray01
}));