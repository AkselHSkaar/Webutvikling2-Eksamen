<template>
    <section>

        <page-hero title="Legg til ett oppdrag" description="Lorem ipsum dolor sitt amet." image="artist-hero-bg.jpg"></page-hero>

        <booking-create></booking-create>

    </section>
</template>

<script>
import PageHero from '../components/shared/PageHero'
import BookingCreate from '../components/bookings/BookingCreate'

export default {
    name: 'AddBookingPage',
    components: {
        PageHero,
        BookingCreate
    }
}
</script>