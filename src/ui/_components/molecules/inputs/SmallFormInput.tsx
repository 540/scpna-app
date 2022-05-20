import { CommonGoldInput } from '../../atoms/inputs/CommonGoldInput'
import { DefaultFormElementWrapper } from '../../'

export const SmallFormInput = ({ value = '' }: { value: string }) => {
  return (
    <DefaultFormElementWrapper>
      <CommonGoldInput value={value} />
    </DefaultFormElementWrapper>
  )
}
