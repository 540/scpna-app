import { ErrorFormElementWrapper } from '../../index'
import { BigGoldInput, InputProps } from '../../atoms'

export const BigFormInput = ({ value = '', name, label, onChange, error, maxLength }: InputProps) => {
  return (
    <ErrorFormElementWrapper>
      <BigGoldInput value={value} name={name} label={label} onChange={onChange} error={error} maxLength={maxLength} />
    </ErrorFormElementWrapper>
  )
}
