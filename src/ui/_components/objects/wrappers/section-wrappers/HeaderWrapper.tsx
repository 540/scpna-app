import styled from '@emotion/styled'
import { Text } from 'ui/_components'

import { colors } from '../../../../_styles'

const HeaderDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 20%;
  width: 100%;

  border-radius: 0 0 27px 27px;

  background-image: url('https://pamplonaswcraft.com/assets/images/bg-hero.jpg');
  background-size: cover;
`
const TitleWrapper = styled.div`
  padding-left: 10%;
  flex: 8;
`

const LeftContentWrapper = styled.div`
  flex: 4;
  height: 100%;
`

const ReturnsDiv = styled.div`
  transform: rotate(-70deg);
`

const HeaderWrapper = (): JSX.Element => {
  return (
    <HeaderDiv>
      <LeftContentWrapper />
      <TitleWrapper>
        <Text variant="h1" color="primary" size="xLarge" bold fontFamily="Basic">
          PAMPLONA
        </Text>
        <Text variant="h1" color="primary" size="xLarge" fontFamily="Black Ops One">
          SOFTWARE CRAFTERS
        </Text>
      </TitleWrapper>
      <ReturnsDiv>
        <Text variant="body1" color="white" size="medium" fontFamily="Monoton">
          RETURNS
        </Text>
      </ReturnsDiv>
    </HeaderDiv>
  )
}

export { HeaderWrapper }
