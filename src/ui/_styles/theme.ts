import { createTheme } from '@mui/material'
import { colors } from 'ui/_styles/settings/colors'

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: colors.primary
    }
  }
})
