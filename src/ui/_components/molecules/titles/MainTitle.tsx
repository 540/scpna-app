import styled from '@emotion/styled'
import { Text } from 'ui/_components/atoms'

const TitleWrapper = styled.div`
  padding-left: 10%;
  flex: 8;
`

export const MainTitle = () => {
  return (
    <TitleWrapper>
      <Text variant="h1" color="primary" size="xLarge" bold fontFamily="Basic">
        PAMPLONA
      </Text>
      <Text variant="h1" color="primary" size="xLarge" fontFamily="Black Ops One">
        SOFTWARE CRAFTERS
      </Text>
    </TitleWrapper>
  )
}
