import React from 'react'
import { Header, ContentWrapper } from 'ui/_components'
import styled from '@emotion/styled'
import { TalkCard } from './_components/TalkCard'
import { AgendaModal } from 'ui/Agenda/_components/AgendaModal'
import { AgendaProps } from './types'

const TalksSectionWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;

  padding: 30px 0px 40px 0px;

  justify-content: flex-start;
  align-items: center;
`

export const Agenda = ({ agenda, modalOpen, selectedSpeaker, openQuestions, closeModal, onInfoClick }: AgendaProps) => {
  return (
    <ContentWrapper>
      <Header />
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
