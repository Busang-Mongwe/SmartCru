import { createRouter, createWebHashHistory } from "vue-router";
//Import outside navbar Routing
import HomePage from "@/outsider/views/HomePage.vue";
import AboutPage from "@/outsider/views/AboutPage.vue";
import ServicesPage from "@/outsider/views/ServicesPage.vue";
import ContactPage from "@/outsider/views/ContactPage.vue";

//Import client Routing
import InboxView from "@/client/views/InboxView.vue";
import InvoiceView from "@/client/views/InvoiceView.vue";
import ManageView from "@/client/views/ManageView.vue";
import ProfileView from "@/client/views/ProfileView.vue";


//Import admin Routing
import AdminInbox from "@/admin/views/AdminInbox.vue";
import AdminInvoice from "@/admin/views/AdminInvoice.vue";
import AdminProfile from "@/admin/views/AdminProfile.vue";
import AdminTask from "@/admin/views/AdminTask.vue";
import AdminUser from "@/admin/views/AdminUser.vue";

const routes = [
    // Outsider Navbar routing
    { path: '/', component: HomePage},
    { path: '/about', component: AboutPage},
    { path: '/services', component: ServicesPage},
    { path: '/contact', component: ContactPage},

    //Client Navbar routing
    { path: '/manage', component: ManageView },
    { path: '/invoice', component: InvoiceView },
    { path: '/inbox', component: InboxView},
    { path: '/profile', component: ProfileView },

    // Admin Navbar routing
    { path: '/admin-project', component: AdminTask},
    { path: '/admin-invoice', component: AdminInvoice},
    { path: '/admin-inbox', component: AdminInbox},
    { path: '/admin-user', component: AdminUser},
    { path: '/admin-profile', component: AdminProfile},
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
export default router;

