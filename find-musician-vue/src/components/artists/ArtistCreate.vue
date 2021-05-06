<template>
    <section>
        <form :onsubmit="handleForm">
            <div>
                <h2 class="mb-5">Legg til en ny artist</h2>
            </div>
            <div class="form-floating mb-3">
                <input v-model="name" @blur="inputChange" type="text" id="name-input" class="form-control" placeholder="Navn" required>
                <label for="name-input">Navn</label>
            </div>
            <select v-model="genre" @blur="inputChange" class="form-select form-select-lg mb-3 py-3 fs-6" aria-label=".form-select-lg example" required>
                <option value="" disabled>Velg en sjanger</option>>
                <option v-for="( genre, i ) in genreList" :key="i" :value="genre.name">{{genre.name}}</option>
            </select>
            <div class="form-floating mb-3">
                <input v-model="price" @blur="inputChange" type="number" min="1" max="1000" id="price-input" class="form-control" placeholder="Pris" required>
                <label for="price-input">Pris per time</label>
            </div>
            <div class="form-floating mb-3">
                <input v-model="instrument" @blur="inputChange" type="text" id="instrument-input" class="form-control" placeholder="Instrument" required>
                <label for="instrument-input">Instrument: (Fullt band, Sang, Gitar..)</label>
            </div>
            <div class="form-floating mb-3">
                <input v-model="biography" @blur="inputChange" type="text" id="biography-input" class="form-control" placeholder="Biografi" required>
                <label for="biography-input">Biografi</label>
            </div>
            <div>
                <div>
                    <label>Bilde</label>
                </div>
                <input @change="setImage" class="form-control" type="file">
            </div>
            <div class="mt-4">
                <input @click="submitCheck" type="submit" value="Legg til artist" class="btn" :class="missingFields ? 'btn-secondary' : 'btn-success'">
            </div>
        </form>
        
    </section>
</template>

<script>
import { ref, reactive, toRefs } from 'vue'
import artistService from '../../services/artistService'
import genreService from '../../services/genreService'

export default {
    name: 'ArtistCreate',
    setup() {
        
        const newArtist = reactive({ name: "", genre: "", price: "", instrument: "", biography: "", image: "" })
        const {genreList, getGenres} = genreService();
        const handleForm = (event) => { event.preventDefault(); }

        getGenres();

        const imageObject = new FormData();

        const setImage = ( e ) => {
            imageObject.append("file", e.target.files[0]);
            newArtist.image = e.target.files[0].name;
        }

        const { createNewArtist } = artistService();

        const addArtist = () => {
            const postArtist = {
                name: newArtist.name.toLowerCase(),
                genre: newArtist.genre,
                price: parseInt(newArtist.price),
                instrument: newArtist.instrument,
                biography: newArtist.biography,
                rating: 0,
                image: newArtist.image
            }

            if (newArtist.image != null){
                createNewArtist( postArtist, imageObject )
                    .then(() => {
                        console.log(imageObject);
                        //location.reload();
                    });
            } else {
                createNewArtist( postArtist, false )
                    .then(() => {
                        location.reload();
                    });
            }
            
        }

        const missingFields = ref(true);

        const inputChange = () => {
            if (newArtist.name != "" && newArtist.genre != "" && newArtist.price != "" && newArtist.price >= 1 && newArtist.price <= 1000 && newArtist.instrument != "" && newArtist.biography != "") {
                missingFields.value = false;
            }
        }

        const submitCheck = () => {
            if (!missingFields.value) {
                addArtist();
            }
        } 

        return {
            ...toRefs(newArtist),
            addArtist,
            setImage,
            genreList,
            missingFields,
            inputChange,
            submitCheck,
            handleForm
        }
    }
}
</script>