import React from 'react'
import { Header, SectionTitle, ContentWrapper } from 'ui/_components'
import { CommonCard } from '../_components/molecules/'
import { AgendaModal } from 'ui/Agenda/_components/AgendaModal'
import { AgendaProps } from './types'
import { CardSectionWrapper } from 'ui/_components/objects'

export const Agenda = ({
  agenda,
  trans,
  modalOpen,
  selectedSpeaker,
  openQuestions,
  closeModal,
  onInfoClick
}: AgendaProps) => {
  return (
    <ContentWrapper>
      <Header />
      <SectionTitle>{trans('title')}</SectionTitle>
      <CardSectionWrapper>
        {agenda.map((item, index) => {
          return (
            <CommonCard
              key={item.id}
              talk={item.title}
              speaker={item.name}
              time={item.time}
              image={item.image}
              onInfoClick={() => onInfoClick(index)}
            />
          )
        })}
      </CardSectionWrapper>
      <AgendaModal {...{ modalOpen, agenda, selectedSpeaker, openQuestions }} closeModal={closeModal} />
    </ContentWrapper>
  )
}
