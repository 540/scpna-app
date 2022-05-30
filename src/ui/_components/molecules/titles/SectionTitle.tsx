import styled from '@emotion/styled'
import { Text } from '../../atoms'
import { Children } from 'ui/_components/objects'
import { colors } from 'ui/_styles'

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  border-radius: 10px;
  background-color: ${colors.primary};
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
