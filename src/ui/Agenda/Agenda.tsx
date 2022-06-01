import React from 'react'
import { Header, SectionTitle } from 'ui/_components'
import styled from '@emotion/styled'
import { TalkCard } from './_components/TalkCard'
import { AgendaModal } from 'ui/Agenda/_components/AgendaModal'
import { AgendaProps } from './types'

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  align-items: center;
  justify-content: space-between;

  background-image: url('https://pamplonaswcraft.com/assets/images/bg-hero-xs.jpg');
`

const TalksSectionWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;

  padding: 30px 0px 40px 0px;

  justify-content: flex-start;
  align-items: center;
`

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
      <TalksSectionWrapper>
        {agenda.map((item, index) => {
          return (
            <TalkCard
              key={item.id}
              talk={item.title}
              speaker={item.name}
              time={item.time}
              image={item.image}
              onInfoClick={() => onInfoClick(index)}
            />
          )
        })}
      </TalksSectionWrapper>
      <AgendaModal {...{ modalOpen, agenda, selectedSpeaker, openQuestions }} closeModal={closeModal} />
    </ContentWrapper>
  )
}
