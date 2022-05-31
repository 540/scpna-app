import { Header, SectionTitle } from 'ui/_components'
import styled from '@emotion/styled'
import React from 'react'
import { HomeLinks } from '../_components/organisms'

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  background-image: url('https://pamplonaswcraft.com/assets/images/bg-hero-xs.jpg');
`

const PagesSection = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  padding: 30px 50px 40px 50px;
  justify-content: space-around;
`

const socialLinks = {
  twitter: 'https://twitter.com/540deg',
  linkedIn: 'https://www.linkedin.com/company/540-degrees',
  instagram: 'https://www.instagram.com/540deg'
}

export const Home = () => {
  return (
    <ContentWrapper>
      <Header />
      <SectionTitle>Home</SectionTitle>
      <PagesSection>
        <HomeLinks links={socialLinks} />
      </PagesSection>
    </ContentWrapper>
  )
}
