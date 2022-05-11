import { Text } from 'ui/_components/atoms/Text'
import { AppBar, Button, IconButton, Toolbar } from '@mui/material'
import { toColor } from 'ui/_styles'
import { useTrans } from 'ui/_hooks/useTrans'
import MenuIcon from '@mui/icons-material/Menu'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

interface Props {
  toggleSidebar: () => void
}

export const Navbar = ({ toggleSidebar }: Props) => {
  const trans = useTrans()

  return (
    <AppBar position="sticky" sx={{ backgroundColor: toColor('white') }} elevation={0}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <IconButton edge="start" onClick={toggleSidebar}>
          <MenuIcon />
        </IconButton>
        <Text size="large" bold>
          {trans('app_name')}
        </Text>
        <Button sx={{ color: toColor('black'), textTransform: 'lowercase' }} startIcon={<AccountCircleIcon />}>
          <Text>admin</Text>
        </Button>
      </Toolbar>
    </AppBar>
  )
}
