import { Button } from '@mui/material'
import styled from '@emotion/styled'
import type { Children } from 'ui/_components/objects'

export type GoldButtonProps = {
  children: Children
  onSubmit?: () => void
  padding?: string
  onClick?: (() => void) | null
  variant?: 'text' | 'contained' | 'outlined' | undefined
}

const StyledButton = styled(Button)<{ padding?: string }>`
  width: fit-content;
  padding: ${props => (props.padding ? props.padding : '10px 30px')};
  border-radius: 20px;
`

type AlternativeProps = {
  type: 'button' | 'submit'
  onClick?: () => void
}
export const GoldButton = ({ children = '', padding, onClick = null, variant = 'contained' }: GoldButtonProps) => {
  let alternativeProps: AlternativeProps
  if (onClick) {
    alternativeProps = { type: 'button', onClick }
  } else {
    alternativeProps = { type: 'submit' }
  }
  return (
    <StyledButton variant={variant} size="small" padding={padding} {...alternativeProps}>
      {children}
    </StyledButton>
  )
}
