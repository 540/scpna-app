import { Text } from 'ui/_components/atoms/Text'
import { AppBar, IconButton, Toolbar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { toColor } from 'ui/_styles'

interface Props {
  toggleSidebar: () => void
}

export const Navbar = ({ toggleSidebar }: Props) => (
  <AppBar position="sticky" sx={{ backgroundColor: toColor('white') }} elevation={0}>
    <Toolbar>
      <IconButton edge="start" onClick={toggleSidebar}>
        <MenuIcon />
      </IconButton>
      <Text variant="h6">Sensor TBM</Text>
    </Toolbar>
  </AppBar>
)
