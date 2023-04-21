import { styled, Typography } from '@mui/material'

const Home = () => {
  const MainPageHeading = styled(Typography)({
    textShadow:
      '0px 0px 0px rgba(0, 0, 0, 1), 1px 0px 0px rgba(0, 0, 0, 1), 1px 1px 0px rgba(0, 0, 0, 1), 0px 1px 0px rgba(0, 0, 0, 1), -1px 0px 0px rgba(0, 0, 0, 1), -1px -1px 0px rgba(0, 0, 0, 1), 0px -1px 0px rgba(0, 0, 0, 1), 1px -1px 0px rgba(0, 0, 0, 1), -1px 1px 0px rgba(0, 0, 0, 1)'
  })
  return <MainPageHeading variant='h1'>Home</MainPageHeading>
}

export default Home
