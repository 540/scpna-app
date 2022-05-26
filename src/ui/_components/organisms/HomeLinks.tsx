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
      <LinkGoldButton icon={<LiveHelpIcon />} link="/ask">
        Haz una pregunta
      </LinkGoldButton>
      <LinkGoldButton icon={<QuestionAnswerIcon />} link="/questions">
        Ver preguntas
      </LinkGoldButton>
      <LinkGoldButton icon={<EventAvailableIcon />} link="/schedules">
        Horario
      </LinkGoldButton>
      <Socials>
        <SocialBox />
      </Socials>
    </HomeLinksWrapper>
  )
}
