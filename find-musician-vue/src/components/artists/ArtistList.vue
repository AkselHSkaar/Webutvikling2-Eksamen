<template>
    <section>
        <div class="row">
            <div class="col form-floating mb-3">
                <input v-model="searchInput" @keyup="listArtistsByName" type="text" class="form-control" id="floatingInput" placeholder="Ole ivars">
                <label for="floatingInput">Søk etter artist</label>
            </div>
            <div class="col">
                <select v-model="sortSelect" class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" @change="sortArtistList()">
                    <option value="0" disabled>Sorter resultater</option>
                    <option value="1">Rating - lav til høy</option>
                    <option value="2">Rating - høy til lav</option>
                    <option value="3">Pris - lav til høy</option>
                    <option value="4">Pris - høy til lav</option>
                </select>
            </div>
            <div>
                <label for="customRange1" class="form-label">Maks timepris</label>
                <input v-model="priceRangeSlider" @change="adjustPriceRange()" type="range" class="form-range" id="customRange1" min="1" max="1000">
                <p>Max price: {{priceRangeSlider}}</p>
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
                <div class="col-12 col-sm-6 col-lg-4 col-xl-3" v-for="( artist, i ) in defaultArtistList" :key="i">
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
            
        </div>
        
    </section>
</template>

<script>
import ArtistItem from './ArtistItem'
import artistService from '../../services/artistService'
import { ref } from 'vue'

export default {
    name: 'ArtistList',
    components: {ArtistItem},
    setup() {
        const { artistList, getArtists, searchResult, searchForArtist} = artistService();
        let defaultArtistList = artistList;

        getArtists();

        const searchInput = ref("");
        const sortSelect = ref("0"); 
        const priceRangeSlider = ref("1000");

        const sortRatingLowToHigh = () => {
            artistList.value.sort((a, b) => (a.rating > b.rating) ? 1 : -1);
            searchResult.value.sort((a, b) => (a.rating > b.rating) ? 1 : -1);
        }

        const sortRatingHighToLow = () => {
            artistList.value.sort((a, b) => (a.rating < b.rating) ? 1 : -1);
            searchResult.value.sort((a, b) => (a.rating < b.rating) ? 1 : -1);
        }

        const sortPriceLowToHigh = () => {
            artistList.value.sort((a, b) => (a.price > b.price) ? 1 : -1);
            searchResult.value.sort((a, b) => (a.price > b.price) ? 1 : -1);
        }

        const sortPriceHighToLow = () => {
            artistList.value.sort((a, b) => (a.price < b.price) ? 1 : -1);
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
            
            //searchResult.filter(artist => artist.price <= priceRangeSlider.value);
            //defaultArtistList.value = defaultArtistList.value.filter(artist => artist.price <= parseInt(priceRangeSlider.value));
            //console.log();
        }

        const listArtistsByName = () =>{ 
                searchForArtist( searchInput.value ).then(() => sortArtistList());
        } 

        return{
            artistList,
            defaultArtistList,
            searchInput,
            listArtistsByName,
            searchResult,
            sortRatingLowToHigh,
            sortRatingHighToLow,
            sortPriceLowToHigh,
            sortPriceHighToLow,
            sortSelect,
            sortArtistList,
            priceRangeSlider,
            adjustPriceRange
        }
    },
    
}
</script>

<style scoped>

</style>