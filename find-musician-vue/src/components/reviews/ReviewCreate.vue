<template>
    <section>
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
                    <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                        <input v-model="stars" type="radio" class="btn-check" name="starsradio" id="btnradio1" value="1" autocomplete="off" checked>
                        <label class="btn btn-outline-primary" for="btnradio1">
                            <img v-if="parseInt(newReview.stars) > 0" class="star" :src="require('@/assets/star.png')">
                            <img v-else class="star" :src="require('@/assets/star-gray.png')">
                        </label>

                        <input v-model="stars" type="radio" class="btn-check" name="starsradio" id="btnradio2" value="2" autocomplete="off">
                        <label class="btn btn-outline-primary" for="btnradio2">
                            <img v-if="parseInt(newReview.stars) >= 2 && parseInt(newReview.stars) > 0" class="star" :src="require('@/assets/star.png')">
                            <img v-else class="star" :src="require('@/assets/star-gray.png')">
                        </label>

                        <input v-model="stars" type="radio" class="btn-check" name="starsradio" id="btnradio3" value="3" autocomplete="off">
                        <label class="btn btn-outline-primary" for="btnradio3">
                            <img v-if="parseInt(newReview.stars) >= 3 && parseInt(newReview.stars) > 0" class="star" :src="require('@/assets/star.png')">
                            <img v-else class="star" :src="require('@/assets/star-gray.png')">
                        </label>

                        <input v-model="stars" type="radio" class="btn-check" name="starsradio" id="btnradio4" value="4" autocomplete="off">
                        <label class="btn btn-outline-primary" for="btnradio4">
                            <img v-if="parseInt(newReview.stars) >= 4 && parseInt(newReview.stars) > 0" class="star" :src="require('@/assets/star.png')">
                            <img v-else class="star" :src="require('@/assets/star-gray.png')">
                        </label>

                        <input v-model="stars" type="radio" class="btn-check" name="starsradio" id="btnradio5" value="5" autocomplete="off">
                        <label class="btn btn-outline-primary" for="btnradio5">
                            <img v-if="parseInt(newReview.stars) == 5" class="star" :src="require('@/assets/star.png')">
                            <img v-else class="star" :src="require('@/assets/star-gray.png')">
                        </label>
                    </div>
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
        const newReview = reactive({ stars: "3", title: "", text: "", artist: "" });

        //const consoleLog = () => { console.log(newReview.stars) };

        getArtists();

        const addReview = () => {
            const postReview = {
                stars: parseInt(newReview.stars),
                title: newReview.title,
                text: newReview.text,
                artist: newReview.artist
            }
    
            createNewReview( postReview )
            //.then(() => getArtistByName(newReview.artist).then())
            .then(() => location.reload());
        }

        return {
            artistList,
            ...toRefs( newReview ),
            addReview,
            newReview
        }
    }
}
</script>

<style scoped>
    .star{
        height: 25px;
    }
</style>