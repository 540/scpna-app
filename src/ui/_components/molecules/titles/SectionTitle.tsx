import styled from '@emotion/styled'
import { Text } from '../../atoms'

const Div = styled.div`
  display: flex;

  width: 100%;

  align-items: center;
  justify-content: center;
`

export const SectionTitle = ({ children: title }: { children: JSX.Element }): JSX.Element => {
  return (
    <Div>
      <Text
        color="black"
        size="big"
        variant="subtitle1"
        fontFamily="Inter"
        fontSpacing="negativeSmall"
        fontHeight="inherit"
        bold
      >
        {title}
      </Text>
    </Div>
  )
}
