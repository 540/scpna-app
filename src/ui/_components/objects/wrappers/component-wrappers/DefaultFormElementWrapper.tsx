/* eslint-disable prettier/prettier */
import styled from '@emotion/styled'

const DefaultFormElementWrapper = styled.div<{justifyContent?: string}>`
  padding: 20px;
  display: flex;
  justify-content: ${props => props.justifyContent || 'center'};
  align-items: center;
`
export {DefaultFormElementWrapper}