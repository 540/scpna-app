import { CommonGoldInput, InputProps } from '../../atoms/'
import { DefaultFormElementWrapper } from '../../'

export const SmallFormInput = ({ value = '', name, onChange }: InputProps) => {
  return (
    <DefaultFormElementWrapper>
      <CommonGoldInput value={value} name={name} onChange={onChange} />
    </DefaultFormElementWrapper>
  )
}
