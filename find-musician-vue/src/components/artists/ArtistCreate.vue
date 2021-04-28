<template>
    <section>
        <div>
            <h3>Lag en ny artist</h3>
        </div>

        <div>
            <div>
                <label>Navn:</label>
            </div>
            <input v-model="name" class="form-control" type="text">
        </div>
        <div>
            <div>
                <label>Sjanger:</label>
            </div>
            <input v-model="genre" class="form-control" type="text">
        </div>
        <div>
            <div>
                <label>Pris per time:</label>
            </div>
            <input v-model="price" class="form-control" type="text">
        </div>
        <div>
            <div>
                <label>Instrument: (Fullt band, Sang, Gitar..)</label>
            </div>
            <input v-model="instrument" class="form-control" type="text">
        </div>
        <div>
            <div>
                <label>Biografi:(skriv litt om deg / dere)</label>
            </div>
            <input v-model="biography" class="form-control" type="text">
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