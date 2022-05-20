import styled from '@emotion/styled'
import { Text } from '../../atoms'

const ReturnsDiv = styled.div`
  transform: rotate(-70deg);
`

export const ReturnsTitle = (): JSX.Element => {
  return (
    <ReturnsDiv>
      <Text variant="body1" color="white" size="medium" fontFamily="Monoton">
        RETURNS
      </Text>
    </ReturnsDiv>
  )
}
