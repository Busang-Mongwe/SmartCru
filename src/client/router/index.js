import { createRouter, createWebHistory } from "vue-router";
import ManageView from "../views/ManageView.vue";
import InboxView from "../views/InboxView.vue";
import InvoiceView from "../views/InvoiceView.vue";
import ProfileView from "../views/ProfileView.vue";

const routes = [
    { path: '/', component: ManageView},
    { path: '/invoice', component: InvoiceView},
    { path: '/profile', component: ProfileView},
    { path: '/inbox', component: InboxView},
];

const router = createRouter ({
    history: createWebHistory(),
    routes,
});

export default router;