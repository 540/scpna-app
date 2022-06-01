import styled from '@emotion/styled'
import { FooterButton } from './FooterButton'
import { colors } from 'ui/_styles'

import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { ModalFooterTypes } from '../types'

const ModalFooterStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 18%;
`

const SocialIcons = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`

export const ModalFooter = ({ agenda, selectedSpeaker, openQuestions }: ModalFooterTypes) => {
  return (
    <ModalFooterStyle>
      <SocialIcons>
        <LinkedInIcon
          sx={{ fontSize: '40px', cursor: 'pointer', marginRight: '10px', color: colors.primary }}
          onClick={() => window.open(agenda[selectedSpeaker].linkedIn, '_blank')}
        />
        <TwitterIcon
          sx={{ fontSize: '40px', cursor: 'pointer', marginRight: '10px', color: colors.primary }}
          onClick={() => window.open(agenda[selectedSpeaker].twitter, '_blank')}
        />
      </SocialIcons>
      <FooterButton onClick={() => openQuestions(agenda[selectedSpeaker].talkId)}>Ver preguntas</FooterButton>
    </ModalFooterStyle>
  )
}
