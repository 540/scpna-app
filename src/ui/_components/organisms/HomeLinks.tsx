import styled from '@emotion/styled'
import { LinkGoldButton } from '../atoms/buttons/LinkGoldButton'
import LiveHelpIcon from '@mui/icons-material/LiveHelp'
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer'
import EventAvailableIcon from '@mui/icons-material/EventAvailable'
import { SocialBox } from '../../_components/molecules/'
import { SocialLinks } from '../molecules/boxes/SocialLinksProps'
import { TransType } from 'ui/_hooks/useTrans'

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
  margin-top: 20px;
`

const commonSx = { fontSize: '30px' }

export const HomeLinks = ({ links, trans }: { links: SocialLinks; trans: TransType }) => {
  return (
    <HomeLinksWrapper>
      <LinkGoldButton icon={<EventAvailableIcon sx={commonSx} />} link="/agenda">
        {trans('agenda_section')}
      </LinkGoldButton>
      <LinkGoldButton icon={<QuestionAnswerIcon sx={commonSx} />} link="/questions">
        {trans('questions_section')}
      </LinkGoldButton>
      <LinkGoldButton icon={<LiveHelpIcon sx={commonSx} />} link="/ask">
        {trans('ask_section')}
      </LinkGoldButton>
      <Socials>
        <SocialBox links={links} />
      </Socials>
    </HomeLinksWrapper>
  )
}
