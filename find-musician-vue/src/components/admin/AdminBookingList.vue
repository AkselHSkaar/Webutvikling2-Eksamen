<template>
    <section>
        <h1>Alle oppdrag:</h1>
        <div class="row g-4">
            <div class="col-12 col-sm-6 col-lg-4 col-xl-3" v-for="( booking, i ) in bookingList" :key="i">
                <admin-booking-item
                :id="booking.id"
                :title="booking.title"
                :description="booking.description"
                :date="booking.date"
                :startTime="booking.startTime"
                :endTime="booking.endTime"
                :genre="booking.genre"
                :price="booking.price"
                :customerName="booking.customerName"
                :customerEmail="booking.customerEmail"
                :customerPhone="booking.customerPhone"
                :image="booking.image"
                ></admin-booking-item>
            </div>
        </div>
    </section>      
</template>

<script>
import bookingService from '../../services/bookingService'
import AdminBookingItem from './AdminBookingItem'

export default {
    name: 'AdminBookingList',
    components: {
        AdminBookingItem
    },
    setup(){

        const { bookingList, getBookings } = bookingService();

        getBookings();

        return {
            bookingList
        }
    }
}
</script>