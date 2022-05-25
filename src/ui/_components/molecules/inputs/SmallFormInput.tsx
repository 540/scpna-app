import { CommonGoldInput, InputProps } from '../../atoms/'
import { DefaultFormElementWrapper } from '../../'

export const SmallFormInput = ({ value = '', name, label, onChange, error, maxLength }: InputProps) => {
  return (
    <DefaultFormElementWrapper>
      <CommonGoldInput
        value={value}
        name={name}
        label={label}
        onChange={onChange}
        error={error}
        maxLength={maxLength}
      />
    </DefaultFormElementWrapper>
  )
}
