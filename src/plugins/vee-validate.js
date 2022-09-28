import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate'
import { localize, setLocale } from '@vee-validate/i18n'
import AllRules from '@vee-validate/rules'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule])
})

configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true,
})

setLocale('zh_TW')

export default (app) => {
  app.component('VForm', Form)
  app.component('VField', Field)
  app.component('ErrorMessage', ErrorMessage)
}
