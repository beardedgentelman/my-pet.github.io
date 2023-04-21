import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Link as RouterLink } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { Grid, Link, TextField, Typography } from '@mui/material'
import useAuth from 'hooks/useAuth'
import api from 'services/api'

import BgBox from 'components/ui/BgBox/BgBox'
import ButtonMain from 'components/ui/ButtonMain/ButtonMain'

import validationSchema from './validation'

function Login() {
  const [isLoading, setIsLoading] = useState(false)
  const auth = useAuth()

  const {
    control,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm({
    resolver: yupResolver(validationSchema)
  })

  const onSubmit = async data => {
    try {
      setIsLoading(true)
      const { data: loginData } = await api.auth.login(data)

      auth.setToken(loginData.token)
      auth.setUser(loginData.user)
    } catch (e) {
      if (e.response.status === 422) {
        Object.keys(e.response.data.errors).forEach(key => {
          setError(key, {
            type: 'manual',
            message: e.response.data.errors[key]
          })
        })
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <BgBox>
      <Grid
        container
        sx={{
          position: 'relative',
          width: '100%',
          maxWidth: '380px',
          gap: '2em',
          background: '#ffffff',
          p: 2,
          boxShadow: '0px 0px 8px 2px rgba(0,0,0,0.6)',
          borderRadius: '8px'
        }}
      >
        <Grid item container>
          <Grid item xs={12}>
            <Typography variant='h4' fontWeight='bold' textAlign='center'>
              Login
            </Typography>
          </Grid>
        </Grid>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid item container spacing={2}>
            <Grid item xs={12}>
              <Controller
                name='email'
                control={control}
                defaultValue=''
                render={({ field }) => (
                  <TextField
                    {...field}
                    error={Boolean(errors.email?.message)}
                    fullWidth={true}
                    type='email'
                    label='Email'
                    variant='filled'
                    helperText={errors.email?.message}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12}>
              <Controller
                name='password'
                control={control}
                defaultValue=''
                render={({ field }) => (
                  <TextField
                    {...field}
                    error={Boolean(errors.password?.message)}
                    type='password'
                    fullWidth={true}
                    label='Password'
                    variant='filled'
                    helperText={errors.password?.message}
                  />
                )}
              />
            </Grid>
            <Grid item container xs={12} justifyContent='space-between' alignItems='flex-end'>
              <Link ml={2} underline='hover' component={RouterLink} to='/registration'>
                Create an account
              </Link>
              <ButtonMain variant='contained' color='primary' type='submit' disabled={isLoading}>
                Login
              </ButtonMain>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </BgBox>
  )
}

export default Login
