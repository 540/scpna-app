import { CommonGoldInput, InputProps } from '../../atoms'
import { ErrorFormElementWrapper } from '../..'

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
    </ErrorFormElementWrapper>
  )
}
