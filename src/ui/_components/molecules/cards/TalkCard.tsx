import styled from '@emotion/styled'
import { Avatar } from '@mui/material'
import { GoldButton, Text } from 'ui/_components/atoms'
import { colors } from 'ui/_styles'

const TalkCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0px;
`

const TalkWrapper = styled.div`
  display; flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`

const CardWrapper = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  background: transparent;
  border-color: ${colors.primary};
  border-width: 3px;
  border-style: solid;
  border-radius: 25px;
  overflow: hidden;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: transparent;
  width: 100%;
`

const SpeakerSection = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  color: ${colors.primary};
  padding: 10px;

  border-bottom-width: 3px;
  border-bottom-color: ${colors.white};
  border-bottom-style: solid;
`

const InfoDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  color: white;
`

type TalkCardProps = { talk: string; speaker: string; time: string; image: string }
export const TalkCard = ({ talk, speaker, time, image }: TalkCardProps) => {
  return (
    <TalkCardWrapper>
      <TalkWrapper>
        <Text bold sx={{ textAlign: 'center' }}>
          {talk}
        </Text>
      </TalkWrapper>
      <CardWrapper>
        <Avatar variant="square" sx={{ height: '100px', width: '100px' }} src={image} />
        <ContentWrapper>
          <SpeakerSection>{speaker}</SpeakerSection>
          <InfoDiv>
            <div>{time}</div>
            <GoldButton padding="5px 10px">Info</GoldButton>
          </InfoDiv>
        </ContentWrapper>
      </CardWrapper>
    </TalkCardWrapper>
  )
}
