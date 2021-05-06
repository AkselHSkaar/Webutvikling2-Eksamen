<template>
    <section>
        <div>
            <form :onsubmit="handleForm">
                <div class="form-floating mb-3">
                    <input v-model="title" @blur="inputChange" type="text" id="title-input" class="form-control" placeholder="Tittel" required>
                    <label for="title-input">Tittel</label>
                </div>
                <div class="form-floating mb-3">
                    <select v-model="artist" @blur="inputChange" class="form-select form-select-lg mb-3 pt-2" aria-label=".form-select-lg example" required>
                        <option value="" disabled>Velg en artist</option>
                        <option v-for="( artist, i ) in artistList" :key="i" :value="artist.name" class="text-capitalize">{{artist.name}}</option>
                    </select>
                </div>
                <div class="form-floating mb-3">
                    <input v-model="text" @blur="inputChange" type="text" id="text-input" class="form-control" placeholder="Anmeldelse" required>
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
                    <input @click="submitCheck" type="submit" value="Legg til anmeldelse" class="btn mt-2" :class="missingFields ? 'btn-secondary' : 'btn-success'">
                </div>
            </form>
        </div>
    </section>
</template>

<script>
import reviewService from '../../services/reviewService'
import artistService from '../../services/artistService'
import { ref, reactive, toRefs } from 'vue'

export default {
    name: 'ReviewCreate',
    setup() {
        
        const { artistList, getArtists, getArtistByName, artistByName, putArtistRating } = artistService();
        const { createNewReview } = reviewService();
        const newReview = reactive({ stars: 3, title: "", text: "", artist: "" });
        const handleForm = (event) => { event.preventDefault(); } 

        getArtists();

        const missingFields = ref(true);

        const inputChange = () => {
            if (newReview.title != "" && newReview.text != "" && newReview.artist != "") {
                missingFields.value = false;
            } else {
                missingFields.value = true;
            }
        }

        const submitCheck = () => {
            if (!missingFields.value) {
                addReview();
            }
        } 

        const addReview = () => {
            const postReview = {
                stars: parseInt(newReview.stars),
                title: newReview.title,
                text: newReview.text,
                artist: newReview.artist
            }
    
            createNewReview( postReview )
                .then(() => {
                    //Get artist and update artist rating
                    getArtistByName(postReview.artist)
                        .then(() => {
                            const addNumberOfRatings = artistByName.value.numberOfRatings + 1;
                            const currentRating = artistByName.value.rating;
                            const newRating = postReview.stars;

                            const calculateRating = () => {
                                if (addNumberOfRatings >= 2) {
                                    return addNumberOfRatings -1;
                                } else {
                                    return 1;
                                }
                            }
                            
                            const totalRating = (((currentRating * calculateRating()) + newRating) / addNumberOfRatings);

                            const artistToEdit = {
                                id: parseInt(artistByName.value.id),
                                name: artistByName.value.name,
                                genre: artistByName.value.genre,
                                price: parseInt(artistByName.value.price),
                                instrument: artistByName.value.instrument,
                                biography: artistByName.value.biography,
                                numberOfRatings: addNumberOfRatings,
                                rating: totalRating,
                                image: artistByName.value.image
                            }
                            
                            putArtistRating(artistToEdit).then( () => {
                                location.reload();
                            });
                        });
                });
            
        }

        return {
            artistList,
            ...toRefs( newReview ),
            addReview,
            newReview,
            missingFields,
            inputChange,
            submitCheck,
            handleForm
        }
    }
} 
</script>

<style scoped>
    .star{
        height: 25px;
    }
</style>