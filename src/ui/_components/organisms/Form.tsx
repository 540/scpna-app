import styled from '@emotion/styled'
import { FormButton, BigFormInput, SelectBox, SmallFormInput } from '../molecules'
import type { SelectBoxOptions } from '../atoms'

import { useFormikContext, Form as FormikForm } from 'formik'

const FormWrapper = styled(FormikForm)`
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
  const context = useFormikContext()

  return (
    <FormWrapper>
      <SmallFormInput name="nombre" value={context.values.nombre} onChange={context.handleChange} />
      <SmallFormInput name="email" value={context.values.email} onChange={context.handleChange} />
      <BigFormInput name="pregunta" value={context.values.pregunta} onChange={context.handleChange} />
      <SelectBox
        title="charla"
        options={talks}
        value={context.values.charla}
        onChange={context.handleChange}
        justifyContent="flex-start"
        name="charla"
      />
      <FormButton>Click me!</FormButton>
    </FormWrapper>
  )
}
