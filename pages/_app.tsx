import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/system'
import { theme } from 'ui/_styles'
import { CssBaseline } from '@mui/material'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
