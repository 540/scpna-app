import styled from '@emotion/styled'
import { LinkGoldButton } from '../atoms/buttons/LinkGoldButton'
import LiveHelpIcon from '@mui/icons-material/LiveHelp'
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer'
import EventAvailableIcon from '@mui/icons-material/EventAvailable'
import { SocialBox } from '../../_components/molecules/'

const HomeLinksWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
`

const Socials = styled.div`
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
  width: 190px;
  max-width: 190px;
  margin-top: 2%;
`

export const HomeLinks = ({}: {}) => {
  return (
    <HomeLinksWrapper>
      <LinkGoldButton icon={<EventAvailableIcon sx={{ fontSize: '30px' }} />} link="/schedules">
        Horario
      </LinkGoldButton>
      <LinkGoldButton icon={<QuestionAnswerIcon sx={{ fontSize: '30px' }} />} link="/questions">
        Ver preguntas
      </LinkGoldButton>
      <LinkGoldButton icon={<LiveHelpIcon sx={{ fontSize: '30px' }} />} link="/ask">
        Haz una pregunta
      </LinkGoldButton>
      <Socials>
        <SocialBox />
      </Socials>
    </HomeLinksWrapper>
  )
}
