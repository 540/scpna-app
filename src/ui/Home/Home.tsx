import { useTrans } from 'ui/_hooks/useTrans'
import { Text } from 'ui/_components'

export const Home = () => {
  const trans = useTrans()

  return (
    <div>
      <Text>{trans('app_name')}</Text>
    </div>
  )
}
