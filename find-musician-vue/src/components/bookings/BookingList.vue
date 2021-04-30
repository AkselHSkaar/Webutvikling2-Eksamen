<template>
    <section>
        <!--
        <div class="row pb-5">
            <div class="col-12 col-sm-6 col-lg-4">
                <div class="form-floating mb-3">
                    <input v-model="searchInput" @keyup="updateArtistList" type="text" class="form-control form-control-lg" id="floatingInput" placeholder="Ole ivars">
                    <label for="floatingInput">Søk etter artist</label>
                </div>
            </div>
            <div class="col-12 col-sm-6 col-lg-4">
                <div class="form-floating mb-3">
                    <select v-model="sortSelect" class="form-select form-select-lg mb-3 py-2 fs-6" aria-label=".form-select-lg example" @change="sortArtistList()">
                        <option value="0" disabled>Sorter resultater</option>
                        <option value="1">Rating - lav til høy</option>
                        <option value="2">Rating - høy til lav</option>
                        <option value="3">Pris - lav til høy</option>
                        <option value="4">Pris - høy til lav</option>
                    </select>
                </div>
            </div>
            <div class="col-12 col-lg-4">
                <label for="customRange1" class="form-label">Maks timepris: {{priceRangeSlider}}kr</label>
                <input v-model="priceRangeSlider" @change="updateArtistList()" type="range" class="form-range" id="customRange1" min="1" max="1000">
            </div>
        </div>
        <div>
            <div v-if="searchInput != ''" class="row g-4">
                <div class="col-12 col-sm-6 col-lg-4 col-xl-3" v-for="( artist, i ) in searchResult" :key="i">
                    <artist-item
                        :name="artist.name"
                        :genre="artist.genre"
                        :price="artist.price"
                        :instrument="artist.instrument"
                        :biography="artist.biography"
                        :rating="artist.rating"
                        :image="artist.image"
                    ></artist-item>
                    
                </div>
            </div>


            <div v-else class="row g-4">
            -->

            <div class="row g-4">
                <div class="col-12 col-sm-6 col-lg-4 col-xl-3" v-for="( booking, i ) in bookingList" :key="i">
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
//import { ref } from 'vue'

export default {
    name: 'BookingList',
    components: { 
        BookingItem 
    },
    setup() {
        const {bookingList, getBookings} = bookingService();

        getBookings();

        /*
        let defaultArtistList = ref([]);

        getArtists().then(() => defaultArtistList.value = artistList.value);

        const searchInput = ref("");
        const sortSelect = ref("0"); 
        const priceRangeSlider = ref("1000");

        const sortRatingLowToHigh = () => {
            defaultArtistList.value.sort((a, b) => (a.rating > b.rating) ? 1 : -1);
            searchResult.value.sort((a, b) => (a.rating > b.rating) ? 1 : -1);
        }

        const sortRatingHighToLow = () => {
            defaultArtistList.value.sort((a, b) => (a.rating < b.rating) ? 1 : -1);
            searchResult.value.sort((a, b) => (a.rating < b.rating) ? 1 : -1);
        }

        const sortPriceLowToHigh = () => {
            defaultArtistList.value.sort((a, b) => (a.price > b.price) ? 1 : -1);
            searchResult.value.sort((a, b) => (a.price > b.price) ? 1 : -1);
        }

        const sortPriceHighToLow = () => {
            defaultArtistList.value.sort((a, b) => (a.price < b.price) ? 1 : -1);
            searchResult.value.sort((a, b) => (a.price < b.price) ? 1 : -1);
        }

        const sortArtistList = () => {
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
            searchResult.value = searchResult.value.filter(artist => artist.price <= parseInt(priceRangeSlider.value));
            defaultArtistList.value = defaultArtistList.value.filter(artist => artist.price <= parseInt(priceRangeSlider.value));
        }

        const updateArtistList = () =>{ 
            defaultArtistList.value = artistList.value;
            if (searchInput.value != '') {
                searchForArtist( searchInput.value )
                    .then(() => sortArtistList())
                    .then(() => adjustPriceRange());
            } else {
                sortArtistList();
                adjustPriceRange();
            }
        } 

        */

        return{
            bookingList
            /*
            defaultArtistList,
            searchInput,
            updateArtistList,
            searchResult,
            sortRatingLowToHigh,
            sortRatingHighToLow,
            sortPriceLowToHigh,
            sortPriceHighToLow,
            sortSelect,
            sortArtistList,
            priceRangeSlider,
            adjustPriceRange
            */
        }
    }
    
}
</script>