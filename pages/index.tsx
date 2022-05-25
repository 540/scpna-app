import type { GetServerSideProps, NextPage } from 'next'
import { Home } from 'ui/Home'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { loadTalks, TalksType } from '../src/database/database'

const HomePage: NextPage<{ talks: TalksType }> = ({ talks }: { talks: TalksType }) => <Home talks={talks} />

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, ['common'])),
    talks: await loadTalks()
  }
})

export default HomePage
