import { Agenda } from './Agenda'
import { TalksType } from 'src/database/database'

export const AgendaController = ({ talks }: { talks: TalksType }) => {
  return <Agenda talks={talks} />
}
