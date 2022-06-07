import React from 'react'
import { Header, SectionTitle, ContentWrapper } from 'ui/_components'
import { TransType } from 'ui/_hooks/useTrans'
import { CardSectionWrapper } from 'ui/_components/objects'
import { ProposalCard } from './_components/ProposalCard'
import { AllAndVotedProposals } from 'src/database/GetProposals'
import { Toast } from 'ui/_components/atoms'
import { v4 as uuidv4 } from 'uuid'
import { UpdateProposalSelection } from 'src/database/UpdateProposalSelection'

export const OpenProposals = ({ trans, votedProposals, allProposals }: { trans: TransType } & AllAndVotedProposals) => {
  const [clickedCards, setClickedCards] = React.useState<string[]>([])
  const [userId, setUserId] = React.useState('')
  const [toastOpen, setToastOpen] = React.useState(false)

  const onClick = (key2: string) => {
    let newClickedCards = clickedCards

    if (newClickedCards.includes(key2)) {
      newClickedCards = newClickedCards.filter(elem => elem !== key2)
      UpdateProposalSelection({ userId, selectedTalks: newClickedCards })
      setClickedCards(newClickedCards)
    } else if (newClickedCards.length < 4) {
      newClickedCards = [...newClickedCards, key2]
      localStorage.setItem('clickedCards', JSON.stringify(newClickedCards))
      UpdateProposalSelection({ userId, selectedTalks: newClickedCards })
      setClickedCards(newClickedCards)
    } else {
      setToastOpen(true)
    }
  }

  React.useEffect(() => {
    console.log('Person: ' + userId + ' Has selected: ' + clickedCards)
  }, [clickedCards, userId])

  React.useEffect(() => {
    const localClickedCards = JSON.parse(localStorage.getItem('clickedCards') as string) as string[]
    if (localClickedCards) {
      setClickedCards(localClickedCards)
    }
    const localHash = localStorage.getItem('userId')
    if (localHash) {
      setUserId(localHash)
    } else {
      const hash = uuidv4()
      localStorage.setItem('userId', hash)
      setUserId(hash)
    }
  }, [])

  const handleToastClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    setToastOpen(false)
  }

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
      <Toast
        content={trans('noMoreVotes', { maxVotes: 4 })}
        toastOpen={toastOpen}
        handleToastClose={handleToastClose}
        severity="warning"
      />
    </ContentWrapper>
  )
}
