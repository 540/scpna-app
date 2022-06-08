import { DefaultFormElementWrapper } from '../..'
import { GoldButton, GoldButtonProps } from '../../atoms'

export const FormButton = ({ children, onClick }: GoldButtonProps) => {
  return (
    <DefaultFormElementWrapper>
      <GoldButton onClick={onClick}>{children}</GoldButton>
    </DefaultFormElementWrapper>
  )
}
