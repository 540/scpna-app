import styled from '@emotion/styled'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { colors } from 'ui/_styles'
import { Text } from 'ui/_components/atoms'
import { AgendaArrType } from 'src/database/database'

const ModalHeaderStyle = styled.div<{ backgroundImage?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px;
  min-height: 40%;
  height: 40%;
  width: 100%;
  background-color: white;
  background-image: url(${props => (props.backgroundImage ? props.backgroundImage : 'null')});
`

type ModalHeaderTypes = {
  agenda: AgendaArrType
  selectedSpeaker: number
  onClose: () => void
}
export const ModalHeader = ({ agenda, selectedSpeaker, onClose }: ModalHeaderTypes) => {
  return (
    <ModalHeaderStyle backgroundImage={agenda[selectedSpeaker].image}>
      <ArrowBackIcon
        sx={{
          fontSize: '30px',
          cursor: 'pointer',
          marginRight: '10px',
          color: colors.white,
          backgroundColor: colors.background,
          borderRadius: '50%'
        }}
        onClick={onClose}
      />
      <Text
        variant="h1"
        color="primary"
        size="xLarge"
        bold
        fontFamily="Basic"
        sx={{
          display: 'inline',
          backgroundColor: colors.background,
          width: 'fit-content',
          padding: '0 20px',
          borderColor: colors.white,
          borderTopStyle: 'solid',
          borderRightStyle: 'solid',
          borderWidth: '3px'
        }}
      >
        {agenda[selectedSpeaker].name}
      </Text>
    </ModalHeaderStyle>
  )
}
