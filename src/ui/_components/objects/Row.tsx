import { Stack } from '@mui/material'
import { ReactNode } from 'react'
import { AlignItems, JustifyContent } from 'ui/_styles'

interface Props {
  children: ReactNode
  justifyContent?: JustifyContent
  alignItems?: AlignItems
  spacing?: number
}

export const Row = ({ children, spacing = 0, justifyContent = 'stretch', alignItems = 'center' }: Props) => {
  return (
    <Stack direction="row" spacing={spacing} justifyContent={justifyContent} alignItems={alignItems}>
      {children}
    </Stack>
  )
}
