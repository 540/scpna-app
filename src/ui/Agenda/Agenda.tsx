import React from 'react'
import { Header, SectionTitle } from 'ui/_components'
import { useTrans } from 'ui/_hooks/useTrans'
import styled from '@emotion/styled'
import { AgendaArrType } from 'src/database'
import { TalkCard } from 'ui/_components/molecules'
import { AgendaModal } from 'ui/Agenda/_components/AgendaModal'

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

export const Agenda = ({ agenda }: { agenda: AgendaArrType }) => {
  const trans = useTrans('agenda')
  const [modalOpen, setModalOpen] = React.useState(false)
  const [selectedSpeaker, setSelectedSpeaker] = React.useState(0)

  const onQuestionsView = (talkId: string) => {
    window.open(`/questions?talk=${talkId}`)
  }

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
              onInfoClick={() => {
                setSelectedSpeaker(index)
                setModalOpen(true)
              }}
            />
          )
        })}
      </TalksSectionWrapper>
      <AgendaModal {...{ modalOpen, agenda, selectedSpeaker, onQuestionsView }} onClose={() => setModalOpen(false)} />
    </ContentWrapper>
  )
}
