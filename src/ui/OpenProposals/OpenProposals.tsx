import React from 'react'
import { Header, SectionTitle, ContentWrapper } from 'ui/_components'
import { TransType } from 'ui/_hooks/useTrans'
import { CardSectionWrapper } from 'ui/_components/objects'
import { ProposalCard } from './_components/ProposalCard'

export const OpenProposals = ({ trans }: { trans: TransType }) => {
  const [clickedCards, setClickedCards] = React.useState<string[]>([])

  const onClick = (key2: string) => {
    if (!clickedCards.includes(key2) && clickedCards.length < 2) {
      setClickedCards([...clickedCards, key2])
    } else {
      setClickedCards(clickedCards.filter(elem => elem !== key2))
    }
  }

  return (
    <ContentWrapper>
      <Header />
      <SectionTitle>{trans('title')}</SectionTitle>
      <CardSectionWrapper>
        <ProposalCard
          key2="a"
          clickedCards={clickedCards}
          talk="Cómo mejorar en JS"
          speaker="Andreu font"
          content="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"
          voteCount={42}
          onClick={onClick}
        />
      </CardSectionWrapper>
      <CardSectionWrapper>
        <ProposalCard
          key2="b"
          clickedCards={clickedCards}
          talk="Cómo mejorar en JS"
          speaker="Andreu font"
          content="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"
          voteCount={42}
          onClick={onClick}
        />
      </CardSectionWrapper>
      <CardSectionWrapper>
        <ProposalCard
          key2="c"
          clickedCards={clickedCards}
          talk="Cómo mejorar en JS"
          speaker="Andreu font"
          content="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"
          voteCount={42}
          onClick={onClick}
        />
      </CardSectionWrapper>
      <CardSectionWrapper>
        <ProposalCard
          key2="d"
          clickedCards={clickedCards}
          talk="Cómo mejorar en JS"
          speaker="Andreu font"
          content="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"
          voteCount={42}
          onClick={onClick}
        />
      </CardSectionWrapper>
    </ContentWrapper>
  )
}
