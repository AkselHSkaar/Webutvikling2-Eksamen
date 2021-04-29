import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../views/HomePage'
import BookingPage from '../views/BookingPage'
import ArtistPage from '../views/ArtistPage'
import PageNotFound from '../views/PageNotFound'
import AddArtistPage from '../views/AddArtistPage'
import AddBookingPage from '../views/AddBookingPage'
import AdminPage from '../views/AdminPage'

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
        name: 'AddArtistPage',
        path: '/legg-til-artist',
        alias: ['/add-artist', '/addartist', '/leggtilartist'],
        component: AddArtistPage
    },
    {
        name: 'AddBookingPage',
        path: '/legg-til-oppdrag',
        alias: ['/add-booking', '/addbooking', '/leggtiloppdrag'],
        component: AddBookingPage
    },
    {
        name: 'AdminPage',
        path: '/admin',
        component: AdminPage
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