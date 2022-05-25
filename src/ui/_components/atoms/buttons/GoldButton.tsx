import { Button } from '@mui/material'
import styled from '@emotion/styled'
import type { Children } from 'ui/_components/objects'

export type GoldButtonProps = {
  children: Children
  onSubmit?: () => void
}

const StyledButton = styled(Button)`
  width: fit-content;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 20px;
`

export const GoldButton = ({ children = '' }: GoldButtonProps) => (
  <StyledButton type="submit" variant="contained" size="small">
    {children}
  </StyledButton>
)
