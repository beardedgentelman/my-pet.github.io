import { AppBar, styled, Toolbar } from '@mui/material'

const Header = props => {
  const CustomAppBar = styled(AppBar)({
    background: '#9138E580',
    backdropFilter: 'blur(8px)'
  })

  return (
    <CustomAppBar position='fixed'>
      <Toolbar justify='space-between'>{props.children}</Toolbar>
    </CustomAppBar>
  )
}

export default Header
