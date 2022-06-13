import styled from '@emotion/styled'
import { colors } from 'ui/_styles'

const QuestionContent = styled.div`
  word-break: break-word;
  color: ${colors.white};
  padding: 20px;
`

const QuestionAuthor = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  color: ${colors.white};
  padding: 20px;
  min-height: 20%;
`

const QuestionBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
  overflow: auto;
  max-height: 35%;
  margin: 20px 0;

  border-top-style: solid;
  border-top-width: 1px;
  border-color: ${colors.primary};
`

type QuestionBoxProps = { author: string; content: string }
export const QuestionBox = ({ author, content }: QuestionBoxProps) => {
  return (
    <QuestionBoxWrapper>
      <QuestionAuthor>{author}</QuestionAuthor>
      <QuestionContent>{content}</QuestionContent>
    </QuestionBoxWrapper>
  )
}
