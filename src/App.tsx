import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider, theme } from '@chakra-ui/react'

import { AppProvider } from 'src/contexts'
import Routes from 'src/routes'

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <ChakraProvider theme={theme}>
          <Routes />
        </ChakraProvider>
      </AppProvider>
    </BrowserRouter>
  )
}
