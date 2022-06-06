import React from 'react'
import styled from '@emotion/styled'
import { GoldButton, Text } from 'ui/_components/atoms'
import { colors } from 'ui/_styles'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;

  background: transparent;
  border: 3px solid ${colors.primary};
  border-radius: 25px;

  height: 100%;
  width: 90%;
  margin: 20px 20px;
`

const TalkWrapper = styled.div`
display; flex;
justify-content: center;
align-items: center;
width: 100%;
padding-top: 10px;
`

const SpeakerSection = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  width: 100%;
  color: ${colors.primary};
  padding: 10px;

  border-bottom: 3px solid ${colors.white};
`
const ContentWrapper = styled.div`
  padding: 10px;
  color: white;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 10px 10px 10px;
  align-items: center;
  width: 100%;
`

const HeartButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: none;
  padding: 0;
  margin-left: 10px;
`

export type ProposalCardProps = {
  key2: string
  talk: string
  speaker: string
  content: string
  voteCount: number
  clickedCards: string[]
  onClick: (cardKey: string) => void
}

export const ProposalCard = ({ key2, talk, speaker, content, voteCount, clickedCards, onClick }: ProposalCardProps) => {
  const clicked = clickedCards.includes(key2)
  return (
    <CardWrapper>
      <TalkWrapper>
        <Text bold sx={{ textAlign: 'center' }} color="white">
          {talk}
        </Text>
      </TalkWrapper>
      <SpeakerSection>
        <Text bold>{speaker}</Text>
      </SpeakerSection>
      <ContentWrapper>{content}</ContentWrapper>
      <ButtonWrapper>
        <Text bold>{clicked ? voteCount + 1 : voteCount}</Text>
        <HeartButton onClick={() => onClick(key2)}>
          {clicked ? (
            <FavoriteIcon color="primary" fontSize="large" />
          ) : (
            <FavoriteBorderIcon color="primary" fontSize="large" />
          )}
        </HeartButton>
      </ButtonWrapper>
    </CardWrapper>
  )
}
