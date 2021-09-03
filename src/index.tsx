import { StrictMode } from 'react'
import { render } from 'react-dom'
import { ColorModeScript } from '@chakra-ui/react'

import { App } from 'src/App'

render(
  <StrictMode>
    <App />
    <ColorModeScript />
  </StrictMode>,
  document.getElementById('root')
)
