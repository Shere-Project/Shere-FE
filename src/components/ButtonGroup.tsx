import { Box, IconButton, styled } from "@mui/material";
import { ArrowUpward, Share } from "@mui/icons-material"

const ButtonContainer = styled(Box)(() => ({
  position: 'fixed',
  right: 0,
  bottom: 0
}))

const ButtonGroup: React.FC = () => {
  return (
    <ButtonContainer>
      <IconButton>
        <Share />
      </IconButton>
      <IconButton>
        <ArrowUpward />
      </IconButton>
    </ButtonContainer>
  )
}

export default ButtonGroup;