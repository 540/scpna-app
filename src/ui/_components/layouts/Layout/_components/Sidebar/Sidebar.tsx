import { Divider, Drawer, List, ListItemText } from '@mui/material'
import { Box, Text } from 'ui/_components'
import { toSpacing } from 'ui/_styles'

interface Props {
  open: boolean
  toggleSidebar: () => void
}

export const Sidebar = ({ open, toggleSidebar }: Props) => (
  <Drawer anchor="left" open={open} onClose={toggleSidebar}>
    <Box width="250px">
      <Box spacing={{ vertical: 'small', horizontal: 'base' }}>
        <Text variant="h4">Menú</Text>
      </Box>
      <Divider />
      <List sx={{ padding: toSpacing('base') }}>
        <ListItemText primary="Home" />
      </List>
    </Box>
  </Drawer>
)
