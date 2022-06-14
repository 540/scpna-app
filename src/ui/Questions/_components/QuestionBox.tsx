import styled from '@emotion/styled'
import { colors } from 'ui/_styles'
import { css } from '@emotion/css'

const QuestionContent = styled.div`
  word-break: break-word;
  color: ${colors.white};
  padding: 20px;
`

const QuestionAuthor = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  padding: 0 20px;
  margin: 10px 20px;
  height: fit-content;
  color: ${colors.background};
`

const QuestionBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
  overflow: auto;
  max-height: 35%;
  margin: 20px 0;
`

type QuestionBoxProps = { author: string; content: string }
export const QuestionBox = ({ author, content }: QuestionBoxProps) => {
  return (
    <QuestionBoxWrapper>
      <QuestionAuthor
        className={css({
          zIndex: 1,
          ':after': {
            content: '""',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: -1,
            backgroundColor: colors.primary,
            position: 'absolute',
            width: '100%',
            height: '100%',
            transform: 'skew(-20deg)'
          }
        })}
      >
        {author}
      </QuestionAuthor>
      <QuestionContent>{content}</QuestionContent>
    </QuestionBoxWrapper>
  )
}
