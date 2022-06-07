import { DefaultFormElementWrapper } from '../..'
import { GoldButton, GoldButtonProps } from '../../atoms'

export const FormButton = ({ children }: GoldButtonProps) => {
  return (
    <DefaultFormElementWrapper>
      <GoldButton>{children}</GoldButton>
    </DefaultFormElementWrapper>
  )
}
