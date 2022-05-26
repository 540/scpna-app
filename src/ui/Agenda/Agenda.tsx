import React from 'react'
import { Header, SectionTitle } from 'ui/_components'
import { useTrans } from 'ui/_hooks/useTrans'
import styled from '@emotion/styled'
import { colors } from 'ui/_styles'
import { TalksType } from 'src/database/database'
import { TalkCard } from 'ui/_components/molecules'

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

export const Agenda = ({ talks }: { talks: TalksType }) => {
  const trans = useTrans('agenda')

  return (
    <ContentWrapper>
      <Header />
      <SectionTitle>{trans('title')}</SectionTitle>

      <TalksSectionWrapper>
        <TalkCard talk="Como mejorar JS" speaker={'Adri'} time={'15:30 - 17:20'} image="images/adri.jpeg" />
        <TalkCard
          talk="De la innovación al desastre"
          speaker={'Diana'}
          time={'18:00 - 20:00'}
          image="images/diana.jpeg"
        />
        <TalkCard
          talk="Como optimizar código"
          speaker={'Fernando Díaz'}
          time={'20:30 - 22:00'}
          image="images/fernando.jpeg"
        />
      </TalksSectionWrapper>
    </ContentWrapper>
  )
}
