<template>
    <section>
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
            <div class="col-12 pt-3">
                <div class="form-group d-flex flex-row flex-wrap">
                    <div v-for="( genre, i ) in defaultGenreList" :key="i">
                        <div v-if="checkIfGenreExists(genre.name)" class="form-check form-check-inline">
                            <input @change="filterGenreList(genre.name)" class="form-check-input" type="checkbox" :id="`${genre.name}-checkbox`" :value="genre.id">
                            <label class="form-check-label text-nowrap" :for="`${genre.name}-checkbox`">{{genre.name}}</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div v-if="searchInput != ''" class="row g-4">
                <div class="col-12 col-sm-6 col-lg-4 col-xl-3" v-for="( artist, i ) in searchResult" :key="i">
                    <div :class="artist.genre" class="rounded-3">
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
            <div v-else class="row g-4">
                <div class="col-12 col-sm-6 col-lg-4 col-xl-3" v-for="( artist, i ) in defaultArtistList" :key="i">
                    <div :class="artist.genre" class="rounded-3">
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
        </div>
    </section>
</template>
<script>
import ArtistItem from './ArtistItem'
import artistService from '../../services/artistService'
import genreService from '../../services/genreService'
import { ref } from 'vue'

export default {
    name: 'ArtistList',
    components: {ArtistItem},
    setup() {
        const { artistList, getArtists, searchResult, searchForArtist} = artistService();
        const { genreList, getGenres } = genreService();
        let defaultArtistList = ref([]);
        let defaultGenreList = ref([]);
        const checkedGenres = ref([]);

        getArtists().then(() => defaultArtistList.value = artistList.value);
        
        getGenres().then(() => {
            defaultGenreList.value = genreList.value
            //Create global classes with border colors from genres
            genreList.value.forEach(genre => {
                let style = document.createElement('style');
                style.innerHTML = `.${genre.name} { border: 5px solid ${genre.color} }`;
                document.getElementsByTagName('head')[0].appendChild(style);
            });
        });

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

        //Hide genre checkboxes if no artist with that genre exists
        const checkIfGenreExists = (nameOfGenre) => {
            let genreExists = false;
            artistList.value.forEach(artist => {
                if (artist.genre == nameOfGenre) {
                    genreExists = true;
                }
            });
            return genreExists;
        }

        //Sort results
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

        //Filter artist by max price
        const adjustPriceRange = () => {
            searchResult.value = searchResult.value.filter(artist => artist.price <= parseInt(priceRangeSlider.value));
            defaultArtistList.value = defaultArtistList.value.filter(artist => artist.price <= parseInt(priceRangeSlider.value));
        }

        //Filter artists by selected genres
        const filterGenres = () => {
            if (checkedGenres.value.length != 0) {
                searchResult.value = searchResult.value.filter(artist => checkedGenres.value.includes(artist.genre));
                defaultArtistList.value = defaultArtistList.value.filter(artist => checkedGenres.value.includes(artist.genre));
            }
        }

        const filterGenreList = (genre) => {
            if (checkedGenres.value.find(element => element == genre)) {
                checkedGenres.value.splice(checkedGenres.value.indexOf(genre), 1);
                updateArtistList();
            } else {
                checkedGenres.value.push(genre);
                updateArtistList();
            }
        }

        //Filter artists based on text input
        const updateArtistList = () =>{ 
            defaultArtistList.value = artistList.value;
            if (searchInput.value != '') {
                searchForArtist( searchInput.value )
                    .then(() => sortArtistList())
                    .then(() => adjustPriceRange())
                    .then(() => filterGenres());
            } else {
                sortArtistList();
                adjustPriceRange();
                filterGenres();
            }
        }

        return{
            artistList,
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
            adjustPriceRange,
            genreList,
            defaultGenreList,
            checkIfGenreExists,
            filterGenreList
        }
    },
    
}
</script>