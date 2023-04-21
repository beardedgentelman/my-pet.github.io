import styled from '@emotion/styled'
import { Button } from '@mui/material'

const ButtonMain = props => {
  const CustomBtn = styled(Button)({
    justifySelf: 'flex-end',
    background: '#9138E5',
    '&:hover': {
      backgroundColor: '#9138C5'
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#00000'
    }
  })
  return <CustomBtn variant='contained'>{props.children}</CustomBtn>
}

export default ButtonMain
