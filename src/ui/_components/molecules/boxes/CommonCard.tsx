import styled from '@emotion/styled'
import { Avatar } from '@mui/material'
import { GoldButton, Text } from 'ui/_components/atoms'
import { colors } from 'ui/_styles'

const CommonCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0px;
`

const TalkWrapper = styled.div`
display; flex;
width: 100%;
justify-content: center;
align-items: center;
margin-bottom: 10px;
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

const InfoDiv = styled.div<{ hasTime: boolean }>`
  display: flex;
  justify-content: ${props => (props.hasTime ? 'space-between' : 'center')};
  align-items: center;
  padding: 10px;
  color: white;
`

const TimeDiv = styled.div`
  margin-right: 10px;
  padding-left: 5px;
  padding-right: 5px;
`

export type CommonCardProps = {
  talk: string
  speaker: string
  time?: string
  image: string
  onInfoClick: () => void
}

export const CommonCard = ({ talk, speaker, time, image, onInfoClick }: CommonCardProps) => {
  return (
    <CommonCardWrapper>
      <TalkWrapper>
        <Text bold sx={{ textAlign: 'center' }} color="white">
          {talk}
        </Text>
      </TalkWrapper>
      <CardWrapper>
        <Avatar variant="square" sx={{ height: '100px', width: '100px' }} src={image} />
        <ContentWrapper>
          <SpeakerSection>
            <Text bold>{speaker}</Text>
          </SpeakerSection>
          <InfoDiv hasTime={time ? true : false}>
            {time ? (
              <TimeDiv>
                <Text bold color="white">
                  {time}
                </Text>
              </TimeDiv>
            ) : null}
            <GoldButton padding="5px 10px" onClick={onInfoClick}>
              Info
            </GoldButton>
          </InfoDiv>
        </ContentWrapper>
      </CardWrapper>
    </CommonCardWrapper>
  )
}
