import styled from '@emotion/styled'
import { colors } from 'ui/_styles'

const QuestionContent = styled.div`
  word-break: break-word;
  color: ${colors.primary};
  padding: 20px 30px;
`

const QuestionAuthor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-right: 5%;
  padding-left: 5%;
  color: ${colors.primary};
  padding: 20px;

  border-bottom-width: 3px;
  border-bottom-color: ${colors.white};
  border-bottom-style: solid;
  min-height: 20%;
`

const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
  overflow: auto;
  background-color: ${colors.background};
  border-color: ${colors.primary};
  border-width: 3px;
  border-style: solid;
  border-radius: 25px;
  max-height: 35%;
  margin: 20px 0;
`

type QuestionBoxProps = { author: string; content: string }
export const QuestionBox = ({ author, content }: QuestionBoxProps) => {
  return (
    <QuestionWrapper>
      <QuestionAuthor>{author}</QuestionAuthor>
      <QuestionContent>{content}</QuestionContent>
    </QuestionWrapper>
  )
}
