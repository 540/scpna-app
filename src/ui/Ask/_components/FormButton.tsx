import { DefaultFormElementWrapper } from '../../_components'
import { GoldButton, GoldButtonProps } from '../../_components/atoms'

export const FormButton = ({ children }: GoldButtonProps) => {
  return (
    <DefaultFormElementWrapper>
      <GoldButton>{children}</GoldButton>
    </DefaultFormElementWrapper>
  )
}
