import { useTrans } from 'ui/_hooks/useTrans'
import { Text, CommonGoldInput, BigGoldInput, GoldSelectBox } from 'ui/_components'

export const Home = () => {
  const trans = useTrans()

  return (
    <div>
      <CommonGoldInput value="nombre" />
      <CommonGoldInput value="email" />
      <BigGoldInput value="pregunta" />
      <GoldSelectBox value="Charla" />
    </div>
  )
}
