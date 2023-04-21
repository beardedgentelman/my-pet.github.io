import { Navigate, Route, Routes } from 'react-router-dom'
import { CircularProgress, Container, Grid } from '@mui/material'
import useAuth from 'hooks/useAuth'
import Home from 'pages/Home/HomePage'
import Login from 'pages/Login'
import NotFound from 'pages/NotFound/NotFound'
import Profile from 'pages/Profile'
import Registration from 'pages/Registration'
import GuestRoute from 'routes/components/GuestRoute'
import PrivateRoute from 'routes/components/PrivateRoute'

function AppRoutes() {
  const auth = useAuth()

  // return auth.isLoaded ? (
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route
        path='/profile'
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />
      <Route
        path='/login'
        element={
          <GuestRoute>
            <Login />
          </GuestRoute>
        }
      />
      <Route
        path='/registration'
        element={
          <GuestRoute>
            <Registration />
          </GuestRoute>
        }
      />

      <Route path='/not-found-404' element={<NotFound />} />
      <Route path='*' element={<Navigate to='/not-found-404' />} />
    </Routes>
  )
  // ) : (
  //   <Container maxWidth='md'>
  //     <Grid container spacing={3} alignItems='center' justifyContent='center'>
  //       <Grid item>
  //         <CircularProgress color='inherit' />
  //       </Grid>
  //     </Grid>
  //   </Container>
  // )
}

export default AppRoutes
