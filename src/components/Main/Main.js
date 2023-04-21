import { Box } from '@mui/material'

const Main = props => {
  return (
    <Box component='main' sx={{ flexGrow: 1, flexShrink: 1, flexBasis: 'auto', minHeight: 'calc(100svh - 64px)' }}>
      {props.children}
    </Box>
  )
}

export default Main
