import React from 'react'
import { Header, SectionTitle, ContentWrapper } from 'ui/_components'
import { TransType } from 'ui/_hooks/useTrans'

export const OpenProposals = ({ trans }: { trans: TransType }) => {
  return (
    <ContentWrapper>
      <Header />
      <SectionTitle>{trans('title')}</SectionTitle>
    </ContentWrapper>
  )
}
