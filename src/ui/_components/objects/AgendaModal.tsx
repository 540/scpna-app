import styled from '@emotion/styled'
import { Modal } from '@mui/material'
import { FooterButton, Text } from 'ui/_components/atoms'
import { colors } from 'ui/_styles'
import { AgendaArrType } from 'src/database/database'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const ModalWrapper = styled.div`
  position: absolute;
  width: 80%;
  height: 90%;
  top: 50%;
  left: 50%;
  border-radius: 30px;
  transform: translate(-50%, -50%);
  overflow: hidden;
  background-image: url('https://pamplonaswcraft.com/assets/images/bg-hero.jpg');
`

const ModalHeader = styled.div<{ backgroundImage?: string }>`
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

const ModalDescription = styled.div`
  width: 100%;
  height: 42%;
  padding: 10px;

  overflow: auto;
`
const ModalFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 18%;
`

const SocialIcons = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`

type AgendaModalProps = {
  modalOpen: boolean
  agenda: AgendaArrType
  selectedSpeaker: number
  onClose: () => void
}

export const AgendaModal = ({ modalOpen, agenda, selectedSpeaker, onClose }: AgendaModalProps) => {
  return (
    <Modal open={modalOpen} onClose={onClose}>
      <ModalWrapper>
        <ModalHeader backgroundImage={agenda[selectedSpeaker].image}>
          <ArrowBackIcon
            sx={{
              fontSize: '30px',
              cursor: 'pointer',
              marginRight: '10px',
              color: colors.primary,
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
              borderColor: colors.primary,
              borderTopStyle: 'solid',
              borderRightStyle: 'solid',
              borderWidth: '3px'
            }}
          >
            {agenda[selectedSpeaker].name}
          </Text>
        </ModalHeader>
        <ModalDescription>
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
          <Text color="primary" size="base" bold fontFamily="Basic">
            {agenda[selectedSpeaker].description}
          </Text>
        </ModalDescription>
        <ModalFooter>
          <SocialIcons>
            <LinkedInIcon
              sx={{ fontSize: '40px', cursor: 'pointer', marginRight: '10px', color: colors.primary }}
              onClick={() => window.open(agenda[selectedSpeaker].linkedIn, '_blank')}
            />
            <TwitterIcon
              sx={{ fontSize: '40px', cursor: 'pointer', marginRight: '10px', color: colors.primary }}
              onClick={() => window.open(agenda[selectedSpeaker].twitter, '_blank')}
            />
          </SocialIcons>
          <FooterButton>Ver preguntas</FooterButton>
        </ModalFooter>
      </ModalWrapper>
    </Modal>
  )
}
