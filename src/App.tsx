import React, { createRef } from 'react'
import './App.css'
import { Box, CssBaseline, IconButton, ThemeProvider } from '@mui/material'
import { SnackbarProvider } from 'notistack'
import theme from './MuiWrapper/theme'
import DynamicForm from './DynamicForm'
import { Close, Remove } from '@mui/icons-material'

function App() {
  const notistackRef = createRef<SnackbarProvider>()
  const onClickDismiss = (key: any) => {
    notistackRef?.current?.closeSnackbar(key)
  }
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SnackbarProvider
          ref={notistackRef}
          action={(key) => (
            <IconButton size="medium" onClick={() => onClickDismiss(key)}>
              <Close />
            </IconButton>
          )}
          maxSnack={4}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <div
            style={{
              position: 'fixed',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: 0,
            }}
          >
            <img
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              src="/bg2.png"
            />
          </div>
          <DynamicForm />
        </SnackbarProvider>
      </ThemeProvider>
    </div>
  )
}

export default App
