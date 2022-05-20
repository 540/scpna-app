import { useTrans } from 'ui/_hooks/useTrans'
import {
  CommonGoldInput,
  BigGoldInput,
  GoldSelectBox,
  FormWrapper,
  ContentWrapper,
  HeaderWrapper,
  SectionTitleWrapper,
  DefaultButton
} from 'ui/_components'

export const Home = () => {
  const trans = useTrans()

  const charlas = [
    { value: 'c1', text: 'Charla 1' },
    { value: 'c2', text: 'Charla 2' },
    { value: 'c3', text: 'Charla 3' }
  ]

  return (
    <ContentWrapper>
      <HeaderWrapper />
      <SectionTitleWrapper>{trans('talks_section_title')}</SectionTitleWrapper>
      <FormWrapper>
        <CommonGoldInput value="nombre" />
        <CommonGoldInput value="email" />
        <BigGoldInput value="pregunta" />
        <GoldSelectBox title="Charla" options={charlas} justifyContent="flex-start" />
        <DefaultButton>Click me!</DefaultButton>
      </FormWrapper>
    </ContentWrapper>
  )
}
