import { useTrans } from 'ui/_hooks/useTrans'
import {
  Text,
  CommonGoldInput,
  BigGoldInput,
  GoldSelectBox,
  FormWrapper,
  ContentWrapper,
  HeaderWrapper,
  GoldButton,
  DefaultFormElementWrapper,
  SectionTitleWrapper,
  DefaultButton
} from 'ui/_components'
import { AppBar } from '@mui/material'

export const Home = () => {
  const trans = useTrans()

  const charlas = [
    {value: 'c1', text: 'Charla 1'},
    {value: 'c2', text: 'Charla 2'},
    {value: 'c3', text: 'Charla 3'}
];

  return (
    <ContentWrapper>
      <HeaderWrapper />
      <SectionTitleWrapper>{trans('talks_section_title')}</SectionTitleWrapper>
      <FormWrapper>
        <CommonGoldInput value="nombre" />
        <CommonGoldInput value="email" />
        <BigGoldInput value="pregunta" />
        <DefaultFormElementWrapper>
          <GoldSelectBox title="Charla" options={charlas}/>
        </DefaultFormElementWrapper>
        <DefaultButton>Click me!</DefaultButton>
      </FormWrapper>
    </ContentWrapper>
  )
}
