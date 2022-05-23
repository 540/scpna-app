import { DefaultFormElementWrapper } from '../../index'
import { BigGoldInput, InputProps } from '../../atoms'

export const BigFormInput = ({ value = '', name, onChange }: InputProps) => {
  return (
    <DefaultFormElementWrapper>
      <BigGoldInput value={value} name={name} onChange={onChange} />
    </DefaultFormElementWrapper>
  )
}
