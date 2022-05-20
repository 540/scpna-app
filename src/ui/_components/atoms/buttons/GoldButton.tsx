import { Button } from '@mui/material'
import styled from '@emotion/styled'

interface Props {
  children: JSX.Element | JSX.Element[] | string
}

const StyledButton = styled(Button)`
  width: fit-content;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 20px;
`

export const GoldButton = ({ children = '' }: Props) => (
  <StyledButton variant="contained" size="small">
    {children}
  </StyledButton>
)
