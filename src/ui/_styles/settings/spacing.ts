export type Spacing = keyof typeof spacing

export type JustifyContent =
  | 'start'
  | 'end'
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'space-between'
  | 'space-evenly'
  | 'space-around'
  | 'stretch'

export type AlignItems = 'start' | 'end' | 'center' | 'flex-start' | 'flex-end'

export const spacing = {
  none: '0',
  xSmall: '4px',
  small: '8px',
  base: '16px',
  medium: '24px',
  large: '32px',
  xLarge: '40px',
  xxLarge: '64px'
}
