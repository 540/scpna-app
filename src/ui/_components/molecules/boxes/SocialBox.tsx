import styled from '@emotion/styled'
import { Text } from 'ui/_components/atoms/'
import { colors } from '../../../_styles/settings/colors'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const RoundedDiv = styled.div`
  border-radius: 25px;
  border: 3px solid ${colors.primary};
  display: flex;
  justify-content: center;
  padding: 5px 5px;
`

const SocialIcons = styled.div`
  display: flex;
  margin-top: 5px;
  margin-bottom: 10px;
  color: ${colors.primary};
`

export const SocialBox = (): JSX.Element => {
  return (
    <RoundedDiv>
      <SocialIcons>
        <TwitterIcon
          sx={{ fontSize: '40px', cursor: 'pointer' }}
          onClick={() => window.open('https://twitter.com', '_blank')}
        />
        <InstagramIcon
          sx={{ fontSize: '40px', cursor: 'pointer' }}
          onClick={() => window.open('https://instagram.com', '_blank')}
        />
        <LinkedInIcon
          sx={{ fontSize: '40px', cursor: 'pointer' }}
          onClick={() => window.open('https://linkedin.com', '_blank')}
        />
      </SocialIcons>
    </RoundedDiv>
  )
}
