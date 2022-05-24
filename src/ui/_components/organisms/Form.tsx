import styled from '@emotion/styled'
import { FormButton, BigFormInput, SelectBox, SmallFormInput } from '../molecules'
import type { SelectBoxOptions } from '../atoms'

import { useFormikContext, Form as FormikForm, FormikProps } from 'formik'

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
  const context: FormikProps<{ name: string; email: string; question: string; talk: string }> = useFormikContext()

  return (
    <FormWrapper>
      <SmallFormInput
        name="name"
        error={context.errors.name}
        value={context.values.name}
        label="nombre"
        onChange={context.handleChange}
        maxLength={20}
      />
      <SmallFormInput
        name="email"
        error={context.errors.email}
        value={context.values.email}
        label="email"
        onChange={context.handleChange}
        maxLength={40}
      />
      <BigFormInput
        name="question"
        error={context.errors.question}
        value={context.values.question}
        label="pregunta"
        onChange={context.handleChange}
        maxLength={100}
      />
      <SelectBox
        title="Charla"
        options={talks}
        error={context.errors.talk}
        value={context.values.talk}
        onChange={context.handleChange}
        justifyContent="flex-start"
        name="talk"
      />
      <FormButton>Click me!</FormButton>
    </FormWrapper>
  )
}
