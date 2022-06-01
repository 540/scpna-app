import styled from '@emotion/styled'

const ErrorFormElementWrapper = styled.div<{ alignItems?: 'flex-start' | 'flex-end' | 'center' }>`
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${props => props.alignItems || 'flex-start'};
`

export { ErrorFormElementWrapper }
