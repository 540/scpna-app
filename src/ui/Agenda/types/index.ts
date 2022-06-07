import type { AgendaArrType } from 'src/database/types'
import { Children } from 'ui/_components/objects'
import type { TransType } from 'ui/_hooks/useTrans'

export { AgendaArrType }

export type FooterButtonProps = { children: Children; onClick: () => void }

export type ModalDescriptionTypes = {
  agenda: AgendaArrType
  selectedSpeaker: number
}

export type ModalHeaderTypes = {
  closeModal: () => void
} & ModalDescriptionTypes

export type AgendaModalProps = {
  modalOpen: boolean
  closeModal: () => void
  openQuestions: (talkId: string) => void
} & ModalDescriptionTypes

export type ModalFooterTypes = {
  openQuestions: (talkId: string) => void
} & ModalDescriptionTypes

export type TalkCardProps = {
  talk: string
  speaker: string
  time: string
  image: string
  onInfoClick: () => void
}

export type AgendaProps = {
  trans: TransType
  modalOpen: boolean
  openQuestions: (talkId: string) => void
  closeModal: () => void
  onInfoClick: (index: number) => void
} & ModalDescriptionTypes
