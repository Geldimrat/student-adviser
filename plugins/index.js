import Vue from 'vue'

export default (context, inject) => {
    // inject('switchLanguage', (tm, ru) => {
    inject('tt', (tm, en) => {
        // console.log('123: ', ru)
        if (context.app.i18n.locale === 'tm') return tm
        return en
    })
}
