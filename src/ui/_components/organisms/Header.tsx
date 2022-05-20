import styled from '@emotion/styled'
import { MainTitle } from '../molecules/index'

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

export const Header = (): JSX.Element => {
  return (
    <HeaderDiv>
      <MainTitle />
    </HeaderDiv>
  )
}
