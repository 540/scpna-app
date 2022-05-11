import { Color, colors } from 'ui/_styles/settings/colors'
import { spacing, Spacing } from 'ui/_styles/settings/spacing'
import { fontSize, FontSize } from 'ui/_styles/settings/font'

export const toColor = (c: Color) => colors[c]
export const toSpacing = (s: Spacing) => spacing[s]
export const toFontSize = (fs: FontSize) => fontSize[fs]
