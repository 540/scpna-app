import React from 'react'
import { Agenda } from './Agenda'
import { AgendaArrType } from './types'

export const AgendaController = ({ agenda }: { agenda: AgendaArrType }) => {
  const [modalOpen, setModalOpen] = React.useState(false)
  const [selectedSpeaker, setSelectedSpeaker] = React.useState(0)

  const openQuestions = (talkId: string) => {
    window.open(`/questions?talk=${talkId}`)
  }

  const closeModal = () => setModalOpen(false)
  const onInfoClick = (index: number) => {
    setSelectedSpeaker(index)
    setModalOpen(true)
  }

  return <Agenda {...{ agenda, modalOpen, selectedSpeaker, openQuestions, closeModal, onInfoClick }} />
}
