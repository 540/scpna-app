import { Button } from '@mui/material'
import styled from '@emotion/styled'
import type { Children } from 'ui/_components/objects'
import AbcIcon from '@mui/icons-material/Abc'
import { SvgIconComponent } from '@mui/icons-material'

const LinkButtonStyle = styled(Button)`
  display: flex;
  padding: 10px;
  width: 250px;
  justify-content: space-between;
  border-radius: 10px;
`

const DefaultHomeLinksWrapper = styled.div<{ justifyContent?: 'flex-start' | 'flex-end' | 'center' }>`
  padding: 20px 0px;
  display: flex;
  justify-content: ${props => props.justifyContent || 'center'};
  align-items
`

export const LinkGoldButton = ({
  children,
  icon = <AbcIcon />,
  link = '/'
}: {
  children: Children
  icon: any
  link: string
}) => {
  return (
    <DefaultHomeLinksWrapper>
      <LinkButtonStyle variant="contained" href={link}>
        {<div>{children}</div>}
        {icon}
      </LinkButtonStyle>
    </DefaultHomeLinksWrapper>
  )
}
