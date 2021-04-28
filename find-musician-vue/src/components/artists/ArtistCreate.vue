<template>
    <section>
        <div>
            <h3>Lag en ny artist</h3>
        </div>
        <div class="form-floating mb-3">
            <input v-model="name" type="text" id="name-input" class="form-control" placeholder="Navn">
            <label for="name-input">Navn</label>
        </div>
        <div class="form-floating mb-3">
            <input v-model="genre" type="text" id="genre-input" class="form-control" placeholder="Sjanger">
            <label for="genre-input">Sjanger</label>
        </div>
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
                <label>Bilde (filnavn)</label>
            </div>
            <input @change="setImage" class="form-control" type="file">
            <p>Valgt bilde: {{ image }}</p>
        </div>
        <div>
            <input @click="addArtist" type="button" value="Legg til artist" class="form-control bg-success text-white mt-2">
        </div>
    </section>
</template>

<script>
import { reactive, toRefs } from 'vue'
import artistService from '../../services/artistService'
//import axios from 'axios'

export default {
    name: 'ArtistCreate',
    setup() {
        
        const newArtist = reactive({ name: "", genre: "", price: "", instrument: "", biography: "", image: "" })
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
            setImage
        }
    }
}
</script>