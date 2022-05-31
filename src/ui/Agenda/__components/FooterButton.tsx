import { Button } from '@mui/material'
import styled from '@emotion/styled'
import type { Children } from 'ui/_components/objects'
import { colors } from 'ui/_styles'

const FooterButtonStyle = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${colors.primary};
  color: ${colors.background};
`

export const FooterButton = ({ children, onClick }: { children: Children; onClick: () => void }) => {
  return (
    <FooterButtonStyle variant="contained" onClick={onClick}>
      {children}
    </FooterButtonStyle>
  )
}