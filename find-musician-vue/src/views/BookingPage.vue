<template>
    <div>
        <page-hero title="Oppdrag" description="Bruk filterene under for å finne oppdrag du som artist vil søke på." image="artist-hero-bg.jpg"></page-hero>
        <div class="container py-5">
            <booking-list></booking-list>
        </div>
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