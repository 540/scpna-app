import { DefaultFormElementWrapper } from '../../'
import { GoldSelectBox, SelectBoxProps } from '../../atoms'

type Props = SelectBoxProps & { justifyContent?: 'flex-start' | 'center' | 'flex-end' }

export const SelectBox = ({
  title = 'Selecciona',
  options = [{ value: 'op1', text: 'Opcion 1' }],
  justifyContent = 'center',
  value,
  onChange,
  name,
  error
}: Props) => {
  return (
    <DefaultFormElementWrapper justifyContent={justifyContent}>
      <GoldSelectBox title={title} options={options} value={value} onChange={onChange} name={name} error={error} />
    </DefaultFormElementWrapper>
  )
}
