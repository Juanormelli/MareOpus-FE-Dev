import 'react-i18next';
import pt from '../public/static/locales/pt.json'

declare module 'react-i18next' {
  interface CustomTypeOptions  {
    defaultNS: 'common';
    resources: typeof pt;
  }
}