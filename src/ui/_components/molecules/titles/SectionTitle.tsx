import styled from '@emotion/styled'
import { Text } from '../../atoms'
import { Children } from 'ui/_components/objects'

const Div = styled.div`
  display: flex;

  width: 100%;

  align-items: center;
  justify-content: center;
`

export const SectionTitle = ({ children: title }: { children: Children }): JSX.Element => {
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
