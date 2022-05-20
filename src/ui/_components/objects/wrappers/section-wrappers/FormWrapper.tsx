import styled from '@emotion/styled'

import { colors } from '../../../../_styles'

const Div = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  background-color: #242d2f;

  border-radius: 27px 27px 0 0;

  padding: 30px 50px 40px 50px;

  justify-content: space-around;

  background-image: url('https://pamplonaswcraft.com/assets/images/bg-hero-xs.jpg');
`

const FormWrapper = ({ children }: { children: JSX.Element | JSX.Element[] }): JSX.Element => {
  return <Div>{children}</Div>
}

export { FormWrapper }
