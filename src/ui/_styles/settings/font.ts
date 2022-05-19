export type FontSize = keyof typeof fontSize

export const fontSize = {
  small: 12,
  base: 16,
  medium: 20,
  large: 24,
  xLarge: 30,
  xxLarge: 36,
  big: 44,
  xBig: 50
}

export type FontSpacing = keyof typeof fontSpacing

export const fontSpacing = {
  negativeSmall: '-0.02em',
  zero: '0em'
}

export type FontHeight = keyof typeof fontHeight
export const fontHeight = {
  initial: 'initial',
  inherit: 'inherit'
}
