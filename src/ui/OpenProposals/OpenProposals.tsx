import React from 'react'
import { Header, SectionTitle, ContentWrapper } from 'ui/_components'
import { TransType } from 'ui/_hooks/useTrans'
import { CardSectionWrapper } from 'ui/_components/objects'
import { ProposalCard } from './_components/ProposalCard'
import { AllAndVotedProposals } from 'src/database/GetProposals'

export const OpenProposals = ({ trans, votedProposals, allProposals }: { trans: TransType } & AllAndVotedProposals) => {
  const [clickedCards, setClickedCards] = React.useState<string[]>([])

  const onClick = (key2: string) => {
    if (!clickedCards.includes(key2) && clickedCards.length < 4) {
      setClickedCards([...clickedCards, key2])
    } else {
      setClickedCards(clickedCards.filter(elem => elem !== key2))
    }
  }
  console.log(allProposals)

  return (
    <ContentWrapper>
      <Header />
      <SectionTitle>{trans('title')}</SectionTitle>
      {allProposals.map(item => {
        return (
          <CardSectionWrapper key={item.key}>
            <ProposalCard
              key2={item.key}
              clickedCards={clickedCards}
              talk={item.title}
              speaker={item.fullName}
              content={item.description}
              voteCount={votedProposals[item.key]}
              onClick={onClick}
            />
          </CardSectionWrapper>
        )
      })}
    </ContentWrapper>
  )
}
