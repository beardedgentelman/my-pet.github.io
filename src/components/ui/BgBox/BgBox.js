import { Grid } from '@mui/material'

import './style.css'

const BgBox = props => {
  const spans = []
  for (let i = 0; i < 20; i++) {
    spans.push(<span key={i} style={{ zIndex: '-1' }}></span>)
  }

  return (
    <Grid className='background' container alignItems='center' justifyContent='center' minHeight='100svh'>
      {props.children}
      {spans}
    </Grid>
  )
}

export default BgBox
