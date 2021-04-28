import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../views/HomePage'
import BookingPage from '../views/BookingPage'
import ArtistPage from '../views/ArtistPage'
import PageNotFound from '../views/PageNotFound'

const routes = [
    {
        name: 'HomePage',
        path: '/',
        component: HomePage
    },
    {
        name: 'BookingPage',
        path: '/booking',
        alias: ['/oppdrag', '/bookings'],
        component: BookingPage
    },
    {
        name: 'ArtistPage',
        path: '/artist',
        alias: ['/artists', '/artister'],
        component: ArtistPage
    },
    {
        name: "PageNotFound",
        path: "/:catchAll(.*)",
        component: PageNotFound
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;