import { createApp } from "vue";
import App from "./App.vue";
import router from "./client/router";

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Import icons
import { faCogs, faUser, faInbox, faFileInvoice } from '@fortawesome/free-solid-svg-icons';

library.add(faCogs, faUser, faInbox, faFileInvoice)

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router); // Register router
app.mount("#app");
