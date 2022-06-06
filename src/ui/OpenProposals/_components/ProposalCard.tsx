import styled from '@emotion/styled'
import { GoldButton, Text } from 'ui/_components/atoms'
import { colors } from 'ui/_styles'

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
  justify-content: center;
  align-items: center;
  width: 100%;
`

export type ProposalCardProps = {
  talk: string
  speaker: string
  content: string
}

export const ProposalCard = ({ talk, speaker, content }: ProposalCardProps) => {
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
        <GoldButton variant="text">Votar</GoldButton>
      </ButtonWrapper>
    </CardWrapper>
  )
}
