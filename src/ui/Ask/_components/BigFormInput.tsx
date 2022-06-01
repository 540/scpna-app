import { ErrorFormElementWrapper } from '../../_components/index'
import { BigGoldInput, ErrorDiv, InputProps } from '../../_components/atoms'
import { ErrorMessage } from 'formik'

export const BigFormInput = ({ value = '', name, label, onChange, error, maxLength }: InputProps) => {
  return (
    <ErrorFormElementWrapper>
      <BigGoldInput value={value} name={name} label={label} onChange={onChange} error={error} maxLength={maxLength} />
      <ErrorMessage name={name as string}>{msg => <ErrorDiv>{msg}</ErrorDiv>}</ErrorMessage>
    </ErrorFormElementWrapper>
  )
}
