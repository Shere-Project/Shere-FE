import { FlexAlignItemsCenterBox, FlexSpaceBetweenCenterBox } from '@/components/modules/Box';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const SelectAddressContainer = styled(FlexSpaceBetweenCenterBox)(({ theme }) => ({
  backgroundColor: theme.style.backGroundGray,
  padding: '1.44rem 2rem',
  '& .MuiButtonBase-root': {
    width: '11.25rem',
    height: '3rem',
    fontSize: '1.25rem',
    borderRadius: '0.625rem'
  },
  borderRadius: '0.625rem'
}))

export const SelectAddress = styled(FlexAlignItemsCenterBox)(({ theme }) => ({
  flexDirection: 'row',
  columnGap: '5.31rem',
  '& .MuiInputBase-root': {
    width: '11.25rem',
    height: '3rem',
    borderRadius: '0.625rem',
    backgroundColor: 'white'
  },
  '& .css-49avnv-MuiFormLabel-root-MuiInputLabel-root': {
    fontSize: '1.25rem',
    lineHeight: '1.75rem',
    color: theme.style.textGray01,
    transform: 'translate(14px, 10px) scale(1)',
  },
    '& .css-1dqdide-MuiFormLabel-root-MuiInputLabel-root.Mui-focused': {
      color: theme.style.textGray01,
    }
}))