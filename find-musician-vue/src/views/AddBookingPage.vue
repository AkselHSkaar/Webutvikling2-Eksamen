<template>
    <section>
        <h1>Registrer ett oppdrag</h1>
        <booking-create></booking-create>
    </section>
</template>

<script>
import BookingCreate from '../components/bookings/BookingCreate'

export default {
    name: 'AddBookingPage',
    components: {
        BookingCreate
    }
}
</script>