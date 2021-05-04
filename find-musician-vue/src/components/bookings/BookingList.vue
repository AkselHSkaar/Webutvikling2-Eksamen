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
                <label for="customRange1" class="form-label">Budsjett: {{priceRangeSlider}}kr per time</label>
                <input v-model="priceRangeSlider" @change="updateBookingList()" type="range" class="form-range" id="customRange1" min="1" max="10000">
            </div>
            <div class="col-12 pt-3">
                <div class="form-group d-flex flex-row">
                    <div v-for="( genre, i ) in defaultGenreList" :key="i">
                        <div v-if="checkIfGenreExists(genre.name)" class="form-check form-check-inline">
                            <input @change="filterGenreList(genre.name)" class="form-check-input" type="checkbox" :id="`${genre.name}-checkbox`" :value="genre.id">
                            <label class="form-check-label text-nowrap" :for="`${genre.name}-checkbox`">{{genre.name}}</label>
                        </div>
                    </div>
                </div>
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
                        :image="booking.image"
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
                        :image="booking.image"
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

        let defaultBookingList = ref([]);
        let defaultGenreList = ref([]);
        const checkedGenres = ref([]);

        getBookings().then(() => defaultBookingList.value = bookingList.value);
        getGenres().then(() => defaultGenreList.value = genreList.value);

        const searchInput = ref("");
        const priceRangeSlider = ref("10000");

        const checkIfGenreExists = (nameOfGenre) => {
            let genreExists = false;
            bookingList.value.forEach(booking => {
                if (booking.genre == nameOfGenre) {
                    genreExists = true;
                }
            });
            return genreExists;
        }

        const adjustPriceRange = () => {
            searchResult.value = searchResult.value.filter(booking => booking.price <= parseInt(priceRangeSlider.value));
            defaultBookingList.value = defaultBookingList.value.filter(booking => booking.price <= parseInt(priceRangeSlider.value));
        }

        const filterGenres = () => {
            if (checkedGenres.value.length != 0) {
                searchResult.value = searchResult.value.filter(booking => checkedGenres.value.includes(booking.genre));
                defaultBookingList.value = defaultBookingList.value.filter(booking => checkedGenres.value.includes(booking.genre));
            }
        }

        const filterGenreList = (genre) => {
            if (checkedGenres.value.find(element => element == genre)) {
                checkedGenres.value.splice(checkedGenres.value.indexOf(genre), 1);
                updateBookingList();
            } else {
                checkedGenres.value.push(genre);
                updateBookingList();
            }
        }

        const updateBookingList = () =>{ 
            defaultBookingList.value = bookingList.value;
            if (searchInput.value != '') {
                searchForBooking( searchInput.value )
                    //.then(() => sortBookingList())
                    .then(() => adjustPriceRange())
                    .then(() => filterGenres());
            } else {
                //sortBookingList();
                adjustPriceRange();
                filterGenres();
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
            genreList,
            defaultGenreList,
            filterGenreList,
            checkIfGenreExists
        }
    }
    
}
</script>