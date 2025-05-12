import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Import icons you want to use
import { faGears, faFileInvoice, faEnvelope, faUserCircle, faRightFromBracket,faUsers, faHouse} from '@fortawesome/free-solid-svg-icons'

library.add(faGears, faFileInvoice, faEnvelope, faUserCircle, faRightFromBracket,faUsers, faHouse )

const app = createApp(App);
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app');
