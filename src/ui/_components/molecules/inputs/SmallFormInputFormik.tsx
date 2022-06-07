import { CommonGoldInput, ErrorDiv, InputProps } from '../../atoms'
import { ErrorFormElementWrapper } from '../..'
import { ErrorMessage } from 'formik'

export const SmallFormInputFormik = ({ value = '', name, label, onChange, error, maxLength }: InputProps) => {
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
