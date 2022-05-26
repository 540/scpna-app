import styled from '@emotion/styled'
import { Text } from '../../atoms'
import { Children } from 'ui/_components/objects'

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
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
        sx={{ wordBreak: 'break-word' }}
        bold
      >
        {title}
      </Text>
    </Div>
  )
}
