import { DefaultFormElementWrapper } from '../../'
import { GoldSelectBox, SelectBoxOptions } from '../../atoms'

interface Props {
  title?: string
  options?: Array<SelectBoxOptions>
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
