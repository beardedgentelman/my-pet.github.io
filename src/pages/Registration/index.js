import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Container, Grid, TextField, Typography } from '@mui/material'
import useAuth from 'hooks/useAuth'
import api from 'services/api'

import ButtonMain from 'components/ui/ButtonMain/ButtonMain'

import validationSchema from './validation'

function Registration() {
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
      await api.auth.registration(data)
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
    <Container maxWidth='xs'>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant='h6'>Create new account</Typography>
        </Grid>
      </Grid>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Controller
              name='firstName'
              control={control}
              defaultValue=''
              render={({ field }) => (
                <TextField
                  {...field}
                  error={Boolean(errors.firstName?.message)}
                  fullWidth={true}
                  label='First name'
                  variant='filled'
                  helperText={errors.firstName?.message}
                />
              )}
            />
          </Grid>

          <Grid item xs={12}>
            <Controller
              name='lastName'
              control={control}
              defaultValue=''
              render={({ field }) => (
                <TextField
                  {...field}
                  error={Boolean(errors.lastName?.message)}
                  fullWidth={true}
                  label='Last name'
                  variant='filled'
                  helperText={errors.lastName?.message}
                />
              )}
            />
          </Grid>

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
          <Grid item xs={12}>
            <ButtonMain variant='contained' color='primary' type='submit' disabled={isLoading}>
              Registration
            </ButtonMain>
            <Button color='inherit' type='submit' component={Link} to='/login'>
              Already have an account?
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  )
}

export default Registration
