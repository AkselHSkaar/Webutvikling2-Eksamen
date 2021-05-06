<template>
    <section>

        <page-hero 
            title="Publiser et oppdrag" 
            description="Fyll ut skjemaet under for å publisere et oppdrag på siden." 
            image="artist-hero-bg.jpg">
        </page-hero>

        <div class="container py-5">
            <booking-create></booking-create>
        </div>

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