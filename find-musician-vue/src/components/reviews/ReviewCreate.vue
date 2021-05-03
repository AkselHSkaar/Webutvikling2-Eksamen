<template>
    <section>
        <h3>Legg til en anmeldelse</h3>
        <div>
            <form>
                <div class="form-floating mb-3">
                    <input v-model="title" type="text" id="title-input" class="form-control" placeholder="Navn">
                    <label for="title-input">Tittel</label>
                </div>
                <div class="form-floating mb-3">
                    <select v-model="artist" class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                        <option value="0" disabled>Velg en artist</option>
                        <option v-for="( artist, i ) in artistList" :key="i" :value="artist.name">{{artist.name}}</option>
                    </select>
                </div>
                <div class="form-floating mb-3">
                    <input v-model="text" type="text" id="text-input" class="form-control" placeholder="Navn">
                    <label for="text-input">Anmeldelse:</label>
                </div>
                <div class="form-floating mb-3">
                    <input v-model="stars" type="text" id="stars-input" class="form-control" placeholder="Navn">
                    <label for="stars-input">Stjerner (1-5)</label>
                </div>
                <div>
                    <input @click="addReview" type="button" value="Legg til anmeldelse" class="form-control bg-success text-white mt-2">
                </div>
            </form>
        </div>
    </section>
</template>

<script>
import reviewService from '../../services/reviewService'
import artistService from '../../services/artistService'
import { reactive, toRefs } from 'vue'

export default {
    name: 'ReviewCreate',
    setup() {
        
        const { artistList, getArtists } = artistService();
        const { createNewReview } = reviewService();
        const newReview = reactive({ stars: "", title: "", text: "", artist: "" });

        getArtists();

        const addReview = () => {
            const postReview = {
                stars: parseInt(newReview.stars),
                title: newReview.title,
                text: newReview.text,
                artist: newReview.artist
            }

            createNewReview( postReview );
            location.reload();
        }

        return {
            artistList,
            ...toRefs( newReview ),
            addReview
        }
    }
}
</script>