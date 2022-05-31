import styled from '@emotion/styled'
import { Modal } from '@mui/material'
import { ModalHeader } from './ModalHeader'
import { ModalDescription } from './ModalDescription'
import { ModalFooter } from './ModalFooter'
import { AgendaArrType } from 'src/database'

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

type AgendaModalProps = {
  modalOpen: boolean
  agenda: AgendaArrType
  selectedSpeaker: number
  onClose: () => void
  onQuestionsView: (talkId: string) => void
}

export const AgendaModal = ({ modalOpen, agenda, selectedSpeaker, onClose, onQuestionsView }: AgendaModalProps) => {
  return (
    <Modal open={modalOpen} onClose={onClose}>
      <ModalWrapper>
        <ModalHeader {...{ agenda, selectedSpeaker, onClose }} />
        <ModalDescription {...{ agenda, selectedSpeaker }} />
        <ModalFooter {...{ agenda, selectedSpeaker, onQuestionsView }} />
      </ModalWrapper>
    </Modal>
  )
}
