import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../views/HomePage'
import BookingPage from '../views/BookingPage'
import ArtistPage from '../views/ArtistPage'
import PageNotFound from '../views/PageNotFound'
import AddArtistPage from '../views/AddArtistPage'
import AddBookingPage from '../views/AddBookingPage'
import AdminPage from '../views/AdminPage'
import AdminArtistPage from '../views/AdminArtistPage'
import AdminBookingPage from '../views/AdminBookingPage'
import AdminReviewsPage from '../views/AdminReviewsPage'

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
        path: '/administrator',
        alias: '/admin',
        component: AdminPage
    },
    {
        name: 'AdminArtistPage',
        path: '/adminartist',
        alias: ['/administrator-artist', '/admin-artist'],
        component: AdminArtistPage
    },
    {
        name: 'AdminBookingPage',
        path: '/adminoppdrag',
        alias: ['/administrator-oppdrag', '/admin-booking'],
        component: AdminBookingPage
    },
    {
        name: 'AdminReviewsPage',
        path: '/adminomtaler',
        alias: ['/administrator-omtaler', '/admin-reviews'],
        component: AdminReviewsPage
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