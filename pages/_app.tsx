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
      <style jsx global>{`
        html,
        body {
          height: 100%;
        }
        #__next {
          height: 100%;
        }
      `}</style>
    </ThemeProvider>
  )
}

export default appWithTranslation(MyApp)
