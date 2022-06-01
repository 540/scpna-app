import styled from '@emotion/styled'
import { Text } from 'ui/_components/atoms'
import { ModalDescriptionTypes } from '../types'

const ModalDescriptionStyle = styled.div`
  width: 100%;
  height: 42%;
  padding: 10px;

  overflow: auto;
`

export const ModalDescription = ({ agenda, selectedSpeaker }: ModalDescriptionTypes) => {
  return (
    <ModalDescriptionStyle>
      <Text
        variant="h2"
        color="primary"
        size="xLarge"
        bold
        fontFamily="Basic"
        sx={{ textAlign: 'center', paddingBottom: '3px' }}
      >
        {agenda[selectedSpeaker].title}
      </Text>
      <Text color="white" size="base" bold fontFamily="Basic" sx={{ paddingLeft: '10px' }}>
        {agenda[selectedSpeaker].description}
      </Text>
    </ModalDescriptionStyle>
  )
}
