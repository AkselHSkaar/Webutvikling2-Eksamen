<template>
    <section>
        <div>
            <h3>Legg til en ny artist</h3>
        </div>
        <div class="form-floating mb-3">
            <input v-model="name" type="text" id="name-input" class="form-control" placeholder="Navn">
            <label for="name-input">Navn</label>
        </div>
        <select v-model="genre" class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
            <option value="0" disabled>Velg en sjanger</option>>
            <option v-for="( genre, i ) in genreList" :key="i" :value="genre.name">{{genre.name}}</option>
        </select>
        <div class="form-floating mb-3">
            <input v-model="price" type="text" id="price-input" class="form-control" placeholder="Pris">
            <label for="price-input">Pris per time</label>
        </div>
        <div class="form-floating mb-3">
            <input v-model="instrument" type="text" id="instrument-input" class="form-control" placeholder="Instrument">
            <label for="instrument-input">Instrument: (Fullt band, Sang, Gitar..)</label>
        </div>
        <div class="form-floating mb-3">
            <input v-model="biography" type="text" id="biography-input" class="form-control" placeholder="Biografi">
            <label for="biography-input">Biografi</label>
        </div>
        <div>
            <div>
                <label>Bilde</label>
            </div>
            <input @change="setImage" class="form-control" type="file">
        </div>
        <div>
            <input @click="addArtist" type="button" value="Legg til artist" class="form-control bg-success text-white mt-2">
        </div>
    </section>
</template>

<script>
import { reactive, toRefs } from 'vue'
import artistService from '../../services/artistService'
import genreService from '../../services/genreService'
//import axios from 'axios'

export default {
    name: 'ArtistCreate',
    setup() {
        
        const newArtist = reactive({ name: "", genre: "", price: "", instrument: "", biography: "", image: "" })
        const {genreList, getGenres} = genreService();
        getGenres();
        console.log(genreList);

        const imageObject = new FormData();

        const setImage = ( e ) => {
            imageObject.append("file", e.target.files[0]);
            newArtist.image = e.target.files[0].name;
        }

        const { createNewArtist } = artistService();

        const addArtist = () => {
            const postArtist = {
                name: newArtist.name,
                genre: newArtist.genre,
                price: parseInt(newArtist.price),
                instrument: newArtist.instrument,
                biography: newArtist.biography,
                rating: 0,
                image: newArtist.image
            }

            createNewArtist( postArtist, imageObject );
        }

        return {
            ...toRefs(newArtist),
            addArtist,
            setImage,
            genreList
        }
    }
}
</script>