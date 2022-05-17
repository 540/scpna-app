/* eslint-disable prettier/prettier */
import { ReactNode } from 'react'
import { Box as BaseBox } from '@mui/material'
import { Color, Spacing, toColor, toSpacing } from 'ui/_styles'

interface Props {
  children: ReactNode
  width?: string
  height?: string
  backgroundColor?: Color
  spacing?: { horizontal: Spacing; vertical: Spacing } | Spacing
}

export const Box = ({ children, width, height, backgroundColor = 'white', spacing = 'none' }: Props) => (
  <BaseBox
    sx={{
      width: width,
      height: height,
      backgroundColor: toColor(backgroundColor),
      margin:
        typeof spacing === 'object'
          ? `${toSpacing(spacing.vertical)} ${toSpacing(spacing.horizontal)}`
          : toSpacing(spacing)
    }}>
    {children}
  </BaseBox>
)
