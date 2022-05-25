import { Button } from '@mui/material'
import styled from '@emotion/styled'
import { DefaultFormElementWrapper } from '../../index'
import type { Children } from 'ui/_components/objects'

const DefaultButtonStyle = styled(Button)`
  display: inline-block;
  width: fit-content;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 27px;
`

export const DefaultButton = ({ children }: { children: Children }) => {
  return (
    <DefaultFormElementWrapper>
      <DefaultButtonStyle variant="contained">{children}</DefaultButtonStyle>
    </DefaultFormElementWrapper>
  )
}
