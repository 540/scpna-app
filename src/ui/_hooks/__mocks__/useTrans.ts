import { isEmpty, isUndefined } from 'lodash'

export const useTrans = () => {
  const trans = (term: string, options?: { [key: string]: string }) => {
    if (!isUndefined(options) && !isEmpty(options)) {
      const optionsText = Object.keys(options).map((objectKey: string) => `${objectKey}:${options[objectKey]}`)
      return `t-${term}#${optionsText.join(',')}`
    }

    return `t-${term}`
  }

  return trans
}
