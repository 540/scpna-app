import { useTrans } from 'ui/_hooks/useTrans'
import { Header, Form, SectionTitle } from 'ui/_components'
import styled from '@emotion/styled'
import { colors } from 'ui/_styles'

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  align-items: center;
  justify-content: space-between;

  background-color: ${colors.primary};
`

export const Home = () => {
  const trans = useTrans()

  const talks = [
    { value: 'c1', text: 'Charla 1' },
    { value: 'c2', text: 'Charla 2' },
    { value: 'c3', text: 'Charla 3' }
  ]

  return (
    <ContentWrapper>
      <Header />
      <SectionTitle>{trans('talks_section_title')}</SectionTitle>
      <Form talks={talks} />
    </ContentWrapper>
  )
}
