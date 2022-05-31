import styled from '@emotion/styled'
import { SelectBox } from '../../_components/molecules'
import { QuestionBox } from './QuestionBox'
import React from 'react'
import { QuestionsAndTalksType } from 'src/database'
import { Toast } from '../../_components/atoms'
import { useTrans } from 'ui/_hooks/useTrans'

import { useRouter } from 'next/router'

const QuestionSectionWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;

  padding: 30px 30px 40px 30px;

  justify-content: flex-start;
  align-items: center;
`
const SelectBoxWrapper = styled.div`
  width: 100%;
`

export const QuestionSection = ({ talks, questions }: QuestionsAndTalksType) => {
  const router = useRouter()
  const commonTrans = useTrans()
  const questionsTrans = useTrans('questions')

  const [talk, setTalk] = React.useState<string>('0')
  const [toastOpen, setToastOpen] = React.useState(false)
  const [questionsContent, setQuestionsContent] = React.useState<React.ReactElement[]>([])

  React.useEffect(() => {
    const { query } = router

    if ('talk' in query) {
      const { talk } = query
      for (const { value } of talks) {
        if (value === talk) {
          setTalk(value)
        }
      }
    }
  }, [router, talks])

  const getActualQuestions = React.useCallback(
    (talk: string): React.ReactElement[] => {
      if (talk === '0') {
        return []
      }

      const filteredQuestions = questions.filter(question => question.talkId === talk)
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
          content={questionsTrans('noTalks')}
          toastOpen={toastOpen}
          handleToastClose={handleToastClose}
          severity="info"
        />
      )}
    </QuestionSectionWrapper>
  )
}
