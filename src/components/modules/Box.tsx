import { Box, Typography } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

export const TextAlignCenterBox = styled(Box)(() => ({
  textAlign: 'center'
}));

export const TextAlignRightBox = styled(Box)(() => ({
  textAlign: 'right'
}));

export const TextAlignLeftBox = styled(Box)(() => ({
  textAlign: 'left'
}));


export const BorderBox = styled(Box)(({ theme }) => ({
  borderWidth: 1,
  borderStyle: 'solid'
}));

export const CircleBackgroundBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  borderRadius: '50%'
}));

export const PositionRelativeBox = styled(Box)(() => ({
  position: 'relative'
}));
export const PositionRelativeFullScreenBox = styled(Box)(() => ({
  position: 'relative',
  width: '100%',
  height: '100%'
}));

export const PositionAbsoluteBox = styled(Box)(() => ({
  position: 'absolute',
  top: 0,
  left: 0
}));

export const PositionAbsoluteCenterBox = styled(Box)(() => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  // transform: 'translate(-50%, -50%)',
  willChange: 'transform',
  WebkitFontSmoothing: 'subpixel-antialiased',
  WebkitTransform: 'translateZ(0) scale(1.0, 1.0)'
}));

export const PositionAbsoluteXCenterBox = styled(Box)(() => ({
  position: 'absolute',
  top: '0',
  left: '50%',
  transform: 'translateX(-50%)'
}));

export const PositionAbsoluteYCenterBox = styled(Box)(() => ({
  position: 'absolute',
  top: '50%',
  left: '0',
  transform: 'translateY(-50%)'
}));

export const PositionTopStickyBox = styled(Box)(() => ({
  position: 'sticky',
  top: 0
}));

export const FullBox = styled(Box)(() => ({
  width: '100%',
  height: '100%'
}));

export const FullHeightBox = styled(Box)(() => ({
  height: '100%'
}));

export const FullWidthBox = styled(Box)(() => ({
  width: '100%'
}));

export const FlexColumnBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column'
}));

export const FlexColumnAlignItemsCenterBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}));

export const FlexColumnJustifyContentCenterBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
}));

export const FlexColumnAlignItemsFlexEndBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end'
}));

export const FlexColumnJustifyContentFlexEndBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end'
}));

export const FlexColumnBottomBox = styled(Box)(() => ({
  display: 'flex',
  height: '100%',
  flexDirection: 'column',
  justifyContent: 'flex-end'
}));

export const FlexBox = styled(Box)(() => ({
  display: 'flex'
}));

export const FlexFullBox = styled(Box)(() => ({
  display: 'flex',
  width: '100%',
  height: '100%'
}));

export const FlexNoWrapBox = styled(Box)(() => ({
  display: 'flex',
  flexWrap: 'nowrap'
}));

export const FlexWrapBox = styled(Box)(() => ({
  display: 'flex',
  flexWrap: 'wrap'
}));

export const FlexJustifyContentCenterBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center'
}));

export const FlexJustifyContentLeftBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'left'
}));

export const FlexJustifyContentFlexEndBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'flex-end'
}));

export const FlexAlignItemsCenterBox = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center'
}));

export const FlexAlignItemsFlexEndBox = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'flex-end'
}));

export const FlexEndEndBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'flex-end'
}));

export const FlexCenterCenterBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}));

export const FlexCenterCenterFullBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%'
}));

export const FlexSpaceAroundBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-around'
}));

export const FlexSpaceBetweenBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between'
}));

export const FlexSpaceBetweenCenterBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
}));

export const FlexSpaceBetweenEndBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-end'
}));

export const GridBox = styled(Box)(() => ({
  display: 'grid'
}));

export const MarginCenterBox = styled(Box)(() => ({
  margin: '0 auto'
}));

export const Flex1Box = styled(Box)(() => ({
  flex: '1'
}));

export const Flex00AutoBox = styled(Box)(() => ({
  flex: '0 0 auto'
}));

export const Flex10AutoBox = styled(Box)(() => ({
  flex: '1 0 auto'
}));

export const Flex01AutoBox = styled(Box)(() => ({
  flex: '0 1 auto'
}));

export const Flex11AutoBox = styled(Box)(() => ({
  flex: 'auto'
}));
export const Flex0066Box = styled(Box)(() => ({
  flex: '0 0 66.666666%'
}));
export const Flex0050Box = styled(Box)(() => ({
  flex: '0 0 50%'
}));
export const Flex0033Box = styled(Box)(() => ({
  flex: '0 0 33.333333%'
}));
export const Flex1166Box = styled(Box)(() => ({
  flex: '1 1 66.666666%'
}));
export const Flex1150Box = styled(Box)(() => ({
  flex: '1 1 50%'
}));
export const Flex1133Box = styled(Box)(() => ({
  flex: '1 1 33.333333%'
}));

export const FlexPaddingTopJustifyContentCenterBox = styled(FlexJustifyContentCenterBox)(() => ({
  paddingTop: '10vh'
}));

export const AsideTitleBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(3.125),
  marginBottom: theme.spacing(1.25)
}));

export const NoWrapBox = styled(Box)(() => ({
  whiteSpace: 'nowrap'
}));

export const PreWrapBox = styled(Box)(() => ({
  whiteSpace: 'pre-wrap'
}));

export const WordWrapBox = styled(Box)(() => ({
  overflowWrap: 'anywhere',
  whiteSpace: 'pre-wrap',
  wordBreak: 'break-word'
}));

export const WordKeepAllBox = styled(Box)(() => ({
  wordBreak: 'keep-all'
}));

export const BreakAllBox = styled(Box)(() => ({
  overflowWrap: 'anywhere',
  wordBreak: 'break-all',
  whiteSpace: 'pre-line'
}));

export const OverflowHiddenBox = styled(Box)(() => ({
  overflow: 'hidden'
}));

export const OverflowAutoBox = styled(Box)(() => ({
  overflow: 'auto'
}));

export const OverflowXAutoBox = styled(Box)(() => ({
  overflowX: 'auto'
}));

export const OverflowYAutoBox = styled(Box)(() => ({
  overflowY: 'auto'
}));

export const CursorPointerBox = styled(Box)(() => ({
  cursor: 'pointer'
}));

export const HoverTextDecorationUnderLineBox = styled(Box)(() => ({
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'underline'
  }
}));

export const HoverTextDecorationNoneBox = styled(Box)(() => ({
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'none'
  }
}));

export const ColorInheritBox = styled(Box)(() => ({
  color: 'inherit'
}));