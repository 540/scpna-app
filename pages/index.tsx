import type { GetStaticProps, NextPage } from 'next'
import { Home } from 'ui/Home'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const HomePage: NextPage = () => <Home />

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, ['common', 'questions']))
  }
})

export default HomePage
