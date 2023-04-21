import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import AuthProvider from 'providers/AuthProvider'
import { theme } from 'style/theme'

import App from './App'

import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <ThemeProvider theme={theme}>
    <AuthProvider>
      <Router>
        <App />
      </Router>
    </AuthProvider>
  </ThemeProvider>
)
