import { Typography, TypographyProps } from '@mui/material';
import { styled } from '@mui/material/styles';

export const SpanTypography = styled((props: TypographyProps) => (
  <Typography component="span" {...props}>
    {props.children}
  </Typography>
))(() => ({}));

export const BoldTypography = styled(Typography)(() => ({
  fontWeight: 'bold'
}));

export const BoldGray9Typography = styled(BoldTypography)(() => ({
  color: '#333'
}));

export const BoldGray8Typography = styled(BoldTypography)(() => ({
  color: '#666'
}));

export const Gray7Typography = styled(Typography)(() => ({
  color: '#999'
}));

export const ColorInheritTypography = styled(Typography)(() => ({
  color: 'inherit'
}));

export const FontSizeInheritTypography = styled(Typography)(() => ({
  fontSize: 'inherit'
}));

export const InheritSpanTypography = styled((props: TypographyProps) => (
  <Typography component="span" {...props}>
    {props.children}
  </Typography>
))(({ theme }) => ({
  fontSize: 'inherit',
  color: 'inherit'
}));

export const InheritTypography = styled(Typography)(() => ({
  fontSize: 'inherit',
  color: 'inherit'
}));

// 부모의 고정된 크기가 있어야 하고 overflow: hidden이 있어야 한다.
export const EllipsisTypography = styled(Typography)(() => ({
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis'
}));

export const BreakSpacesTypography = styled(Typography)(() => ({
  wordBreak: 'keep-all',
  overflowWrap: 'anywhere'
}));

export const BreakAllTypography = styled(Typography)(() => ({
  wordBreak: 'break-all',
  overflowWrap: 'break-word'
}));

export const PreWrapTypography = styled(Typography)(() => ({
  whiteSpace: 'pre-wrap'
}));

export const PreLineTypography = styled(Typography)(() => ({
  whiteSpace: 'pre-line'
}));

export const HoverUnderLineSpanTypography = styled((props: TypographyProps) => (
  <Typography component="span" {...props}>
    {props.children}
  </Typography>
))(() => ({
  wordBreak: 'break-all',
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'underline'
  }
}));
