import { DefaultFormElementWrapper } from '../../'
import { GoldSelectBox } from '../../atoms'

type Option = {
  value: string
  text: string
}

interface Props {
  title?: string
  options?: Array<Option>
  justifyContent?: 'flex-start' | 'center' | 'flex-end'
}

export const SelectBox = ({
  title = 'Selecciona',
  options = [{ value: 'op1', text: 'Opcion 1' }],
  justifyContent = 'center'
}: Props) => {
  return (
    <DefaultFormElementWrapper justifyContent={justifyContent}>
      <GoldSelectBox title={title} options={options} />
    </DefaultFormElementWrapper>
  )
}
