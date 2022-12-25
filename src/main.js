import { createApp } from 'vue'
import App from './App.vue'
import VueAnimateOnScroll from 'vue3-animate-onscroll';
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret)

import './assets/main.css'
const app = createApp(App);
app.use(VueAnimateOnScroll,'font-awesome-icon', FontAwesomeIcon);
app.mount('#app');