<template>
    <article>
        <div class="card">
            <div class="card-body">
                <div class="d-flex align-items-start pb-3">
                    <div class="star" v-for="( rating, i ) in ratingArray" :key="i">
                        <img class="star" :src="require('@/assets/star.png')">
                    </div>
                </div>
                <h5 class="card-title">{{title}}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Artist: {{artist}}</h6>
                <p class="card-text">{{text}}</p>
            </div>
            <button @click="deleteFromDb" class="btn btn-danger">
                Slett
            </button>
        </div>
    </article>
</template>

<script>
import { ref } from 'vue'
import reviewService from '../../services/reviewService'
import artistService from '../../services/artistService'

export default {
    name: 'AdminReviewItem',
    props: {
        id: Number,
        stars: Number,
        title: String,
        text: String,
        artist: String
    },
    setup(props){

        const { deleteReview } = reviewService();
        const { getArtistByName, artistByName, putArtistRating } = artistService();
        const ratingArray = ref([]);


        for (let i = 0; i < props.stars; i++) {
            ratingArray.value.push(i);
        }

        const deleteFromDb = () => {
            deleteReview( props.id )
                .then(() => {
                    getArtistByName(props.artist)
                            .then(() => {
                                const addNumberOfRatings = artistByName.value.numberOfRatings - 1;
                                const currentRating = artistByName.value.rating;
                                const newRating = props.stars;

                                const calculateRating = () => {
                                    if (addNumberOfRatings >= 1) {
                                        return addNumberOfRatings +1;
                                    } else {
                                        return 1;
                                    }
                                }

                                const calculateDivider = () => {
                                    if (addNumberOfRatings >= 2) {
                                        return addNumberOfRatings;
                                    } else {
                                        return 1;
                                    }
                                }
                                
                                const totalRating = (((parseFloat(currentRating) * calculateRating()) - parseInt(newRating)) / calculateDivider());

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
                                
                                putArtistRating(artistToEdit)
                                    .then( () => {
                                        location.reload();
                                    });
                            });
                });
        }

        return {
            ratingArray,
            deleteFromDb
        }
    }
}
</script>

<style scoped>
    .star{
        height: 25px;
    }
</style>