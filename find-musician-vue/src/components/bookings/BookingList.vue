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
                    <div v-for="( genre, i ) in genreList" :key="i">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                            <label class="form-check-label" for="inlineCheckbox1">1</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-4">
                <label for="customRange1" class="form-label">Budsjett: {{priceRangeSlider}}kr per time</label>
                <input v-model="priceRangeSlider" @change="updateBookingList()" type="range" class="form-range" id="customRange1" min="1" max="10000">
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
import genreService from '../../services/genreService'
import { ref } from 'vue'

export default {
    name: 'BookingList',
    components: { 
        BookingItem 
    },
    setup() {
        const {bookingList, getBookings, searchResult, searchForBooking} = bookingService();
        const {genreList, getGenres} = genreService();

        getBookings();
        getGenres();

        let defaultBookingList = ref([]);

        getBookings().then(() => defaultBookingList.value = bookingList.value);

        const searchInput = ref("");
        const priceRangeSlider = ref("10000");

/*
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
*/
        const adjustPriceRange = () => {
            searchResult.value = searchResult.value.filter(booking => booking.price <= parseInt(priceRangeSlider.value));
            defaultBookingList.value = defaultBookingList.value.filter(booking => booking.price <= parseInt(priceRangeSlider.value));
        }

        const updateBookingList = () =>{ 
            defaultBookingList.value = bookingList.value;
            if (searchInput.value != '') {
                searchForBooking( searchInput.value )
                    //.then(() => sortBookingList())
                    .then(() => adjustPriceRange());
                    console.log(searchResult.value);
            } else {
                //sortBookingList();
                adjustPriceRange();
            }
        } 


        return{
            bookingList,
            defaultBookingList,
            searchInput,
            updateBookingList,
            searchResult,
            //sortBookingList,
            priceRangeSlider,
            adjustPriceRange,
            genreList
        }
    }
    
}
</script>