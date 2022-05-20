import styled from '@emotion/styled'
import { FormButton, BigFormInput, SelectBox, SmallFormInput } from '../molecules'
import type { SelectBoxOptions } from '../atoms'

const FormWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  background-color: #242d2f;

  border-radius: 27px 27px 0 0;

  padding: 30px 50px 40px 50px;

  justify-content: space-around;

  background-image: url('https://pamplonaswcraft.com/assets/images/bg-hero-xs.jpg');
`

export const Form = ({ talks }: { talks: Array<SelectBoxOptions> }) => {
  return (
    <FormWrapper>
      <SmallFormInput value="nombre" />
      <SmallFormInput value="email" />
      <BigFormInput value="pregunta" />
      <SelectBox title="Charla" options={talks} justifyContent="flex-start" />
      <FormButton>Click me!</FormButton>
    </FormWrapper>
  )
}
