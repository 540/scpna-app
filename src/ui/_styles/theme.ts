import { createTheme } from '@mui/material'
import { colors } from 'ui/_styles/settings/colors'

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary
    },
    secondary: {
      main: colors.secondary
    },
    background: {
      default: colors.background
    }
  },
  components: {
    MuiOutlinedInput: {
      defaultProps: {},
      styleOverrides: {
        notchedOutline: {
          borderColor: colors.primary,
          borderWidth: 2
        }
      }
    }
  }
})
