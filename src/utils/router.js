import { createRouter, createWebHistory } from 'vue-router';

import Home from '../routes/Home.vue';
import About from '../routes/About.vue';
import Contact from '../routes/Contact.vue';
import PortfolioItem from '../routes/PortfolioItem.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/contact',
            component: Contact
        },
        {
            path: '/portfolio/:id',
            component: PortfolioItem
        }
    ]
});

export default router;

