import styled from '@emotion/styled'
import { Text } from 'ui/_components/atoms/'

const HeaderDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 20%;
  width: 100%;
  border-radius: 0 0 27px 27px;
  background-image: url('https://pamplonaswcraft.com/assets/images/bg-hero.jpg');
  background-size: cover;
`

export const Header = (): JSX.Element => {
  return (
    <HeaderDiv>
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
      </Text>{' '}
    </HeaderDiv>
  )
}
