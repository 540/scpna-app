import { ReactNode, useState } from 'react'
import Head from 'next/head'
import { Box } from 'ui/_components/objects/Box'
import { Navbar } from './_components/Navbar'
import { Sidebar } from 'ui/_components/layouts/Layout/_components/Sidebar'

interface Props {
  children: ReactNode
  title?: string
}

export const Layout = ({ children, title = 'Sensor TBM' }: Props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  return (
    <Box height="100vh" backgroundColor="grey">
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar open={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Box backgroundColor="grey">{children}</Box>
    </Box>
  )
}
