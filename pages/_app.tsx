import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/system'
import { theme } from 'ui/_styles'
import { CssBaseline } from '@mui/material'
import { appWithTranslation } from 'next-i18next'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default appWithTranslation(MyApp)
