<template>
    <div>
        <page-hero title="Oppdrag" description="Lorem ipsum dolor sitt amet." image="artist-hero-bg.jpg"></page-hero>
        <booking-list></booking-list>
    </div>

</template>

<script>
import PageHero from '../components/shared/PageHero'
import BookingList from '../components/bookings/BookingList'

export default {
    name: 'BookingPage',
    components:{
        PageHero,
        BookingList
    },
    setup() {
        
    }
}
</script>