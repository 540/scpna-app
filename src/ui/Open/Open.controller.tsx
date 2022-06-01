import { Open } from './Open'
import { useTrans } from 'ui/_hooks/useTrans'
import * as yup from 'yup'

export const OpenController = () => {
  const trans = useTrans('open')

  const validationSchema = yup.object({
    title: yup.string().trim().required(trans('error_title_required')),
    name: yup.string().trim().required(trans('error_name_required')),
    last_name: yup.string().trim().required(trans('error_last_name_required')),
    email: yup.string().email(trans('error_email_invalid')).required(trans('error_email_required')),
    description: yup.string().trim().required(trans('error_description_required'))
  })

  return <Open />
}
