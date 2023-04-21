import { useNavigate } from 'react-router-dom'
import { Link as RouterLink } from 'react-router-dom'
import { Button, CssBaseline, Link } from '@mui/material'
import useAuth from 'hooks/useAuth'
import AppRoutes from 'routes/AppRoutes'

import Header from 'components/Header/Header'
import Main from 'components/Main/Main'

function App() {
  const auth = useAuth()
  const navigate = useNavigate()

  const onLogOut = () => {
    auth.logOut()
    navigate('/login')
  }

  return (
    <div className='App' style={{ display: 'flex', flexDirection: 'column', minHeight: '100%' }}>
      <CssBaseline />
      <Header>
        <Link underline='none' variant='h5' color='#000000' component={RouterLink} to='/'>
          logotype.
        </Link>
        {auth.isLoaded && auth.user ? (
          <>
            <Button color='inherit' component={RouterLink} to='/profile' sx={{ ml: 'auto' }}>
              {auth.user.firstName} {auth.user.lastName}
            </Button>
            <Button variant='outlined' onClick={onLogOut} ml={2}>
              Log out
            </Button>
          </>
        ) : (
          <>
            <Button color='inherit' variant='outlined' sx={{ ml: 'auto' }} component={RouterLink} to='/login'>
              Login
            </Button>
            <Button color='inherit' variant='outlined' sx={{ ml: 2 }} component={RouterLink} to='/registration'>
              Sign In
            </Button>
          </>
        )}
      </Header>
      <Main>
        <AppRoutes />
      </Main>
    </div>
  )
}

export default App
