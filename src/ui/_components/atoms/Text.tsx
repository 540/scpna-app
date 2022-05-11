import { Typography } from '@mui/material'
import { Color, FontSize, toColor } from 'ui/_styles'
import { ReactNode } from 'react'

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'inherit'

interface Props {
  children: ReactNode
  color?: Color
  variant?: Variant
  size?: FontSize
  bold?: boolean
}

export const Text = ({ children, size, bold, variant = 'body1', color = 'text' }: Props) => (
  <Typography sx={{ color: toColor(color), fontSize: size, fontWeight: bold ? 'bold' : 'normal' }} variant={variant}>
    {children}
  </Typography>
)
