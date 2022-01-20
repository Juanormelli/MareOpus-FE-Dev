import common from '../../public/locales/pt/common.json'
import { OnlyStringKeys } from './utilityTypes'

export interface Resources {
  common: OnlyStringKeys<typeof common>
}

export type Locale = 'pt' | 'en' | 'es'