import styled from '@emotion/styled'
import { QuestionBox } from 'ui/_components/molecules/questions/QuestionBox'
import { SelectBox } from '../molecules'
import React from 'react'
import { QuestionsAndTalksType } from 'src/database/database'
import { Toast } from '../atoms'
import { useTrans } from 'ui/_hooks/useTrans'

const QuestionSectionWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;

  padding: 30px 30px 40px 30px;

  justify-content: flex-start;
  align-items: center;

  background-image: url('https://pamplonaswcraft.com/assets/images/bg-hero-xs.jpg');
`
const SelectBoxWrapper = styled.div`
  width: 100%;
`

export const QuestionSection = ({ talks, questions }: QuestionsAndTalksType) => {
  const commonTrans = useTrans()
  const questionsTrans = useTrans('questions')
  const [talk, setTalk] = React.useState<string>('0')
  const [toastOpen, setToastOpen] = React.useState(false)
  const [questionsContent, setQuestionsContent] = React.useState<React.ReactElement[]>([])

  const getActualQuestions = React.useCallback(
    (talk: string): React.ReactElement[] => {
      if (talk === '0') {
        return []
      }

      const filteredQuestions = questions.filter(question => question.speech === talk)
      return filteredQuestions.map(({ name, question }) => (
        <QuestionBox key={`${name}${question}`} author={name} content={question} />
      ))
    },
    [questions]
  )
  React.useEffect(() => {
    if (talk !== '0') {
      const newQuestionsContent = getActualQuestions(talk)
      setQuestionsContent(newQuestionsContent)
      if (newQuestionsContent.length === 0) {
        setToastOpen(true)
      }
    }
  }, [talk, getActualQuestions])

  const handleToastClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    setToastOpen(false)
  }

  return (
    <QuestionSectionWrapper>
      <SelectBoxWrapper>
        <SelectBox
          title={commonTrans('talkInputDefaultText')}
          options={talks}
          value={talk}
          onChange={e => setTalk(e.target.value as string)}
          justifyContent="flex-end"
          name="talk"
        />
      </SelectBoxWrapper>
      {questionsContent.length > 0 ? (
        questionsContent
      ) : (
        <Toast
          content={questionsTrans('noTalks', { talk })}
          toastOpen={toastOpen}
          handleToastClose={handleToastClose}
          severity="info"
        />
      )}
    </QuestionSectionWrapper>
  )
}
