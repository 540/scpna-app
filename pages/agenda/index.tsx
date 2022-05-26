import type { GetStaticProps, NextPage } from 'next'
import { Agenda } from 'ui/Agenda'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { loadTalks, TalksType } from '../../src/database/database'

const AgendaPage: NextPage<{ talks: TalksType }> = ({ talks }: { talks: TalksType }) => <Agenda talks={talks} />

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, ['common', 'agenda'])),
    talks: await loadTalks()
  }
})

export default AgendaPage
