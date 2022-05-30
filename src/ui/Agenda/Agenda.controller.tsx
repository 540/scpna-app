import { Agenda } from './Agenda'
import { AgendaArrType } from 'src/database/database'

export const AgendaController = ({ agenda }: { agenda: AgendaArrType }) => {
  return <Agenda agenda={agenda} />
}
