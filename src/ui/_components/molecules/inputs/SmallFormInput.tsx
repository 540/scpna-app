import { CommonGoldInput, InputProps, ErrorDiv } from '../../atoms/'
import { DefaultFormElementWrapper } from '../../'

export const SmallFormInput = ({ value = '', name, label, onChange, error }: InputProps) => {
  return (
    <DefaultFormElementWrapper>
      <CommonGoldInput value={value} name={name} label={label} onChange={onChange} error={error} />
    </DefaultFormElementWrapper>
  )
}
