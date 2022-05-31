export type QuestionsAndTalksType = {
  questions: QuestionsArrType
  talks: TalksType
}

export type TalksType = { text: string; value: string }[]

export type QuestionsArrType = {
  email: string
  talkId: string
  name: string
  question: string
}[]

export type AgendaType = {
  id: string
  image: string
  description: string
  title: string
  time: string
  linkedIn: string
  twitter: string
  name: string
  talkId: string
}

export type AgendaArrType = AgendaType[]
