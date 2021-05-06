<template>
    <div>
        <page-hero 
            title="Administrer oppdrag" 
            description="Her kan du redigere eller slette oppdrag i databasen." 
            image="artist-hero-bg.jpg">
        </page-hero>

        <div class="container py-5">
            <admin-booking-list></admin-booking-list>
        </div>
    </div>
</template>

<script>
import AdminBookingList from '../components/admin/AdminBookingList'
import PageHero from '../components/shared/PageHero'

export default {
    name: 'AdminBookingPage',
    components: {
        AdminBookingList,
        PageHero
    }
}
</script>