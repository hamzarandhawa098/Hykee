import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCaretDown, faCheck, faChevronDown, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { faFacebook,  faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

library.add(faCheck, faFacebook, faTwitter, faLinkedin, faPlus, faMinus, faChevronDown, faCaretDown)
const app = createApp(App)

app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
