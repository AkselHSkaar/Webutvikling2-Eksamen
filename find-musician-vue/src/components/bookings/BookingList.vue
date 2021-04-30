<template>
    <section>
        <div class="row pb-5">
            <div class="col-12 col-sm-6 col-lg-4">
                <div class="form-floating mb-3">
                    <input v-model="searchInput" @keyup="updateBookingList" type="text" class="form-control form-control-lg" id="floatingInput" placeholder="Ole ivars">
                    <label for="floatingInput">Søk etter oppdrag</label>
                </div>
            </div>
            <div class="col-12 col-sm-6 col-lg-4">
                <div class="form-group">
                    <label for="example-date-input" class="col-form-label">Arrangementer etter</label>
                    <div class="col-10">
                        <input class="form-control" type="date" value="2011-08-19" id="example-date-input">
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-4">
                <label for="customRange1" class="form-label">Budsjett: {{priceRangeSlider}}kr per time</label>
                <input v-model="priceRangeSlider" @change="updateBookingList()" type="range" class="form-range" id="customRange1" min="1" max="1000">
            </div>
        </div>
            <div v-if="searchInput != ''" class="row g-4">
                <div class="col-6" v-for="( booking, i ) in searchResult" :key="i">
                    <booking-item
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
                    ></booking-item>
                </div>
            </div>
            <div v-else class="row g-4">
                <div class="col-6" v-for="( booking, i ) in defaultBookingList" :key="i">
                    <booking-item
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
                    ></booking-item>
                </div>
            </div>
    </section>
</template>

<script>
import BookingItem from './BookingItem'
import bookingService from '../../services/bookingService'
import { ref } from 'vue'

export default {
    name: 'BookingList',
    components: { 
        BookingItem 
    },
    setup() {
        const {bookingList, getBookings, searchResult, searchForBooking} = bookingService();

        getBookings();

        let defaultBookingList = ref([]);

        getBookings().then(() => defaultBookingList.value = bookingList.value);

        const searchInput = ref("");
        const sortSelect = ref("0"); 
        const priceRangeSlider = ref("1000");

        const sortRatingLowToHigh = () => {
            defaultBookingList.value.sort((a, b) => (a.rating > b.rating) ? 1 : -1);
            searchResult.value.sort((a, b) => (a.rating > b.rating) ? 1 : -1);
        }

        const sortRatingHighToLow = () => {
            defaultBookingList.value.sort((a, b) => (a.rating < b.rating) ? 1 : -1);
            searchResult.value.sort((a, b) => (a.rating < b.rating) ? 1 : -1);
        }

        const sortPriceLowToHigh = () => {
            defaultBookingList.value.sort((a, b) => (a.price > b.price) ? 1 : -1);
            searchResult.value.sort((a, b) => (a.price > b.price) ? 1 : -1);
        }

        const sortPriceHighToLow = () => {
            defaultBookingList.value.sort((a, b) => (a.price < b.price) ? 1 : -1);
            searchResult.value.sort((a, b) => (a.price < b.price) ? 1 : -1);
        }

        const sortBookingList = () => {
            if (sortSelect.value != "") {
                if (sortSelect.value == "1") {
                    sortRatingLowToHigh();
                } else if (sortSelect.value == "2") {
                    sortRatingHighToLow();
                } else if (sortSelect.value == "3") {
                    sortPriceLowToHigh();
                } else {
                    sortPriceHighToLow();
                }
            }
        }

        const adjustPriceRange = () => {
            searchResult.value = searchResult.value.filter(booking => booking.price <= parseInt(priceRangeSlider.value));
            defaultBookingList.value = defaultBookingList.value.filter(booking => booking.price <= parseInt(priceRangeSlider.value));
        }

        const updateBookingList = () =>{ 
            defaultBookingList.value = bookingList.value;
            if (searchInput.value != '') {
                searchForBooking( searchInput.value )
                    .then(() => sortBookingList())
                    .then(() => adjustPriceRange());
            } else {
                sortBookingList();
                adjustPriceRange();
            }
        } 


        return{
            bookingList,
            defaultBookingList,
            searchInput,
            updateBookingList,
            searchResult,
            sortRatingLowToHigh,
            sortRatingHighToLow,
            sortPriceLowToHigh,
            sortPriceHighToLow,
            sortSelect,
            sortBookingList,
            priceRangeSlider,
            adjustPriceRange
        }
    }
    
}
</script>