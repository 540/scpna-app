import type { GetStaticProps, NextPage } from 'next'
import { Agenda } from 'ui/Agenda'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { getAgenda } from '../../src/database'
import { AgendaArrType } from '../../src/database/types'

const AgendaPage: NextPage<{ agenda: AgendaArrType }> = ({ agenda }: { agenda: AgendaArrType }) => (
  <Agenda agenda={agenda} />
)

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, ['common', 'agenda'])),
    agenda: await getAgenda()
  }
})

export default AgendaPage
