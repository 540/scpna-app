import React from 'react'
import { Header, SectionTitle } from 'ui/_components'
import { useTrans } from 'ui/_hooks/useTrans'
import styled from '@emotion/styled'
import { colors } from 'ui/_styles'
import { AgendaArrType } from 'src/database/database'
import { TalkCard } from 'ui/_components/molecules'
import { AgendaModal } from 'ui/_components/objects/AgendaModal'

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  align-items: center;
  justify-content: space-between;

  background-color: ${colors.primary};
`

const TalksSectionWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;

  padding: 30px 30px 40px 30px;

  justify-content: flex-start;
  align-items: center;

  background-image: url('https://pamplonaswcraft.com/assets/images/bg-hero-xs.jpg');
`

export const Agenda = ({ agenda }: { agenda: AgendaArrType }) => {
  const trans = useTrans('agenda')
  const [modalOpen, setModalOpen] = React.useState(false)
  const [selectedSpeaker, setSelectedSpeaker] = React.useState(0)

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
      <AgendaModal {...{ modalOpen, agenda, selectedSpeaker }} onClose={() => setModalOpen(false)} />
    </ContentWrapper>
  )
}
