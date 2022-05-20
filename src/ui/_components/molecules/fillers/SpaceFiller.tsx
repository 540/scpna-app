import styled from '@emotion/styled'

export const SpaceFiller = styled.div<{ flex: number }>`
  flex: ${props => props.flex};
  height: 100%;
`
