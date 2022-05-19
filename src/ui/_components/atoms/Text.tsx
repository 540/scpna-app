import { Typography } from '@mui/material'
import { Color, FontSize, FontSpacing, FontHeight, toColor, toFontHeight, toFontSize, toFontSpacing } from 'ui/_styles'
import { ReactNode } from 'react'

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'inherit'

interface Props {
  children: ReactNode
  color?: Color
  variant?: Variant
  size?: FontSize
  bold?: boolean
  fontFamily?: string
  fontSpacing?: FontSpacing
  fontHeight?: FontHeight
}

export const Text = ({
  children,
  bold,
  size = 'medium',
  variant = 'body1',
  color = 'text',
  fontFamily = '',
  fontSpacing = 'zero',
  fontHeight = 'initial'
}: Props) => (
  <Typography
    sx={{
      color: toColor(color),
      fontWeight: bold ? 'bold' : 'normal',
      'letter-spacing': toFontSpacing(fontSpacing),
      'line-height': toFontHeight(fontHeight)
    }}
    fontSize={toFontSize(size)}
    variant={variant}
    fontFamily={fontFamily || 'Roboto'}
  >
    {children}
  </Typography>
)
