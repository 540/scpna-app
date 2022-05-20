import { DefaultFormElementWrapper } from '../../'
import { GoldButton } from '../../atoms'
import { Children } from 'ui/_components/objects'
type buttonProps = {
  children: Children
}

export const FormButton = ({ children }: buttonProps) => {
  return (
    <DefaultFormElementWrapper>
      <GoldButton>{children}</GoldButton>
    </DefaultFormElementWrapper>
  )
}
