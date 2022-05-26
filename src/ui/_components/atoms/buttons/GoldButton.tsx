import { Button } from '@mui/material'
import styled from '@emotion/styled'
import type { Children } from 'ui/_components/objects'

export type GoldButtonProps = {
  children: Children
  onSubmit?: () => void
  padding?: string
}

const StyledButton = styled(Button)<{ padding?: string }>`
  width: fit-content;
  padding: ${props => (props.padding ? props.padding : '10px 30px')};
  border-radius: 20px;
`

export const GoldButton = ({ children = '', padding }: GoldButtonProps) => (
  <StyledButton type="submit" variant="contained" size="small" padding={padding}>
    {children}
  </StyledButton>
)
