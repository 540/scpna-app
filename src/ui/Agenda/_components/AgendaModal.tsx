import styled from '@emotion/styled'
import { Modal } from '@mui/material'
import { ModalHeader } from './ModalHeader'
import { ModalDescription } from './ModalDescription'
import { ModalFooter } from './ModalFooter'
import { AgendaModalProps } from '../types'

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

export const AgendaModal = ({ modalOpen, agenda, selectedSpeaker, closeModal, openQuestions }: AgendaModalProps) => {
  return (
    <Modal open={modalOpen} onClose={closeModal}>
      <ModalWrapper>
        <ModalHeader {...{ agenda, selectedSpeaker, closeModal }} />
        <ModalDescription {...{ agenda, selectedSpeaker }} />
        <ModalFooter {...{ agenda, selectedSpeaker, openQuestions }} />
      </ModalWrapper>
    </Modal>
  )
}
