import styled from '@emotion/styled'
import { Text } from 'ui/_components/atoms/'
import { Children } from 'ui/_components/objects'

const HeaderDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 20%;
  width: 100%;
`

const GoHomeStyledDiv = styled.div`
  cursor: pointer;
`

const GoHomeDiv = ({ children }: { children: Children }) => {
  const goHome = () => {
    window.open('/', '_self')
  }

  return <GoHomeStyledDiv onClick={goHome}>{children}</GoHomeStyledDiv>
}

export const Header = (): JSX.Element => {
  return (
    <HeaderDiv>
      <GoHomeDiv>
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
      </GoHomeDiv>
      <GoHomeDiv>
        <Text
          variant="h1"
          color="primary"
          size="xLarge"
          fontFamily="Black Ops One"
          sx={{ display: 'inline', textDecoration: 'underline', textAlign: 'center' }}
        >
          SOFTWARE CRAFTERS
        </Text>
      </GoHomeDiv>
      <GoHomeDiv>
        <Text variant="body1" color="white" size="medium" fontFamily="Monoton" sx={{ textAlign: 'center' }}>
          RETURNS
        </Text>{' '}
      </GoHomeDiv>
    </HeaderDiv>
  )
}
