import { Layout } from 'ui/_components'
import { Box } from '@mui/system'
import { toColor } from 'ui/_styles'

export const Home = () => {
  return (
    <Layout>
      <Box sx={{ height: '50px', backgroundColor: toColor('text') }} />
    </Layout>
  )
}
