/* eslint-disable prettier/prettier */
import { Button } from '@mui/material'
import styled from '@emotion/styled'
import {DefaultFormElementWrapper} from '../../index'

const DefaultButtonStyle = styled(Button)`
  display: inline-block;
  width: fit-content;
`

export const DefaultButton = ({children}: {children: JSX.Element | JSX.Element[] | string}) => {
  return (
    <DefaultFormElementWrapper>
      <DefaultButtonStyle variant="contained">{children}</DefaultButtonStyle>
    </DefaultFormElementWrapper>
  )
}
