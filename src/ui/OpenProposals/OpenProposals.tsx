import React from 'react'
import { Header, SectionTitle, ContentWrapper } from 'ui/_components'
import { TransType } from 'ui/_hooks/useTrans'
import { CardSectionWrapper } from 'ui/_components/objects'
import { ProposalCard } from './_components/ProposalCard'

export const OpenProposals = ({ trans }: { trans: TransType }) => {
  return (
    <ContentWrapper>
      <Header />
      <SectionTitle>{trans('title')}</SectionTitle>
      <CardSectionWrapper>
        <ProposalCard
          talk="Cómo mejorar en JS"
          speaker="Andreu font"
          content="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"
        />
      </CardSectionWrapper>
      <CardSectionWrapper>
        <ProposalCard
          talk="Cómo mejorar en JS"
          speaker="Andreu font"
          content="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"
        />
      </CardSectionWrapper>
      <CardSectionWrapper>
        <ProposalCard
          talk="Cómo mejorar en JS"
          speaker="Andreu font"
          content="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"
        />
      </CardSectionWrapper>
      <CardSectionWrapper>
        <ProposalCard
          talk="Cómo mejorar en JS"
          speaker="Andreu font"
          content="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"
        />
      </CardSectionWrapper>
    </ContentWrapper>
  )
}
