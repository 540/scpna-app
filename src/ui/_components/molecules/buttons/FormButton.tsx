import { DefaultFormElementWrapper } from '../../'
import { GoldButton } from '../../atoms'

type buttonProps = {
  children: JSX.Element | JSX.Element[] | string
}

export const FormButton = ({ children }: buttonProps) => {
  return (
    <DefaultFormElementWrapper>
      <GoldButton>{children}</GoldButton>
    </DefaultFormElementWrapper>
  )
}
