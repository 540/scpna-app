import { useTrans } from 'ui/_hooks/useTrans'
import {
  Text,
  CommonGoldInput,
  BigGoldInput,
  GoldSelectBox,
  FormWrapper,
  ContentWrapper,
  HeaderWrapper
} from 'ui/_components'
import { AppBar } from '@mui/material'

export const Home = () => {
  const trans = useTrans()

  return (
    <ContentWrapper>
      <HeaderWrapper />
      <FormWrapper>
        <CommonGoldInput value="nombre" />
        <CommonGoldInput value="email" />
        <BigGoldInput value="pregunta" />
        <GoldSelectBox value="Charla" />
      </FormWrapper>
    </ContentWrapper>
  )
}
