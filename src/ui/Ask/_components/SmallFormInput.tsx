import { CommonGoldInput, ErrorDiv, InputProps } from '../../_components/atoms'
import { ErrorFormElementWrapper } from '../../_components'
import { ErrorMessage } from 'formik'

export const SmallFormInput = ({ value = '', name, label, onChange, error, maxLength }: InputProps) => {
  return (
    <ErrorFormElementWrapper>
      <CommonGoldInput
        value={value}
        name={name}
        label={label}
        onChange={onChange}
        error={error}
        maxLength={maxLength}
      />
      <ErrorMessage name={name as string}>{msg => <ErrorDiv>{msg}</ErrorDiv>}</ErrorMessage>
    </ErrorFormElementWrapper>
  )
}
