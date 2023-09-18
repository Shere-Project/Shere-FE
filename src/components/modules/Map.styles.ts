import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const MapContainer = styled(Box)(() => ({
  position: 'relative'
}))

export const IconBox = styled(Box)(() => ({
  position: 'absolute',
  left: '1rem',
  bottom: '1rem',
  backgroundColor: 'white',
  zIndex: 100,
  '& .MuiIconButton-root': {
    width: '2.5rem',
    height: '2.5rem',
    padding: '.37rem'
  }
}))