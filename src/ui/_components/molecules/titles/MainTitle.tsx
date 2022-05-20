import styled from '@emotion/styled'
import { Text } from 'ui/_components/atoms'

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const MainTitle = () => {
  return (
    <TitleWrapper>
      <Text
        variant="h1"
        color="primary"
        size="xLarge"
        bold
        fontFamily="Basic"
        sx={{ display: 'inline', textAlign: 'center' }}
      >
        PAMPLONA
      </Text>
      <Text
        variant="h1"
        color="primary"
        size="xLarge"
        fontFamily="Black Ops One"
        sx={{ display: 'inline', textDecoration: 'underline', textAlign: 'center' }}
      >
        SOFTWARE CRAFTERS
      </Text>
      <Text variant="body1" color="white" size="medium" fontFamily="Monoton" sx={{ textAlign: 'center' }}>
        RETURNS
      </Text>
    </TitleWrapper>
  )
}
