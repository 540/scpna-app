import { DefaultFormElementWrapper } from '../../index'
import { BigGoldInput } from '../../atoms'

export const BigFormInput = ({ value = '' }: { value: string }) => {
  return (
    <DefaultFormElementWrapper>
      <BigGoldInput value={value} />
    </DefaultFormElementWrapper>
  )
}
