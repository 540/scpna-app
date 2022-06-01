import { Button } from '@mui/material'
import styled from '@emotion/styled'
import { colors } from 'ui/_styles'
import { FooterButtonProps } from '../types'

const FooterButtonStyle = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${colors.primary};
  color: ${colors.background};
`

export const FooterButton = ({ children, onClick }: FooterButtonProps) => {
  return (
    <FooterButtonStyle variant="contained" onClick={onClick}>
      {children}
    </FooterButtonStyle>
  )
}
