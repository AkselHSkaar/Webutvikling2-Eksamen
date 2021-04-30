<template>
    <div>
        <page-hero title="Administrator" description="Lorem ipsum dolor sitt amet." image="artist-hero-bg.jpg"></page-hero>
        <admin-artist-list></admin-artist-list>
        <admin-booking-list></admin-booking-list>
    </div>
</template>

<script>
import PageHero from '../components/shared/PageHero'
import AdminArtistList from '../components/admin/AdminArtistList'
import AdminBookingList from '../components/admin/AdminBookingList'

export default {
    name: 'AdminPage',
    components: {
        PageHero,
        AdminArtistList,
        AdminBookingList
    }
}
</script>