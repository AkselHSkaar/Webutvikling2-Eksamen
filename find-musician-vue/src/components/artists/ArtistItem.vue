<template>
    <article>
        <div class="card" :style="styleObject">
            <img :src="`https://localhost:5001/images/${image}`" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title text-capitalize">{{ name }}</h5>
                <div class="d-flex align-items-start pb-3">
                    <p v-show="parseInt(rating) < 1">Ingen rating enda</p>
                    <img v-if="parseInt(rating) > 0" class="star" :src="require('@/assets/star.png')">
                    <img v-if="parseInt(rating) > 1" class="star" :src="require('@/assets/star.png')">
                    <img v-if="parseInt(rating) > 2" class="star" :src="require('@/assets/star.png')">
                    <img v-if="parseInt(rating) > 3" class="star" :src="require('@/assets/star.png')">
                    <img v-if="parseInt(rating) > 4" class="star" :src="require('@/assets/star.png')">
                    <p v-show="parseInt(rating) >= 1" class="rating-number">{{rating.toFixed(1)}}</p>
                </div>
                <p>Sjanger: {{ genre }}, pris per time: {{ price }},- NOK</p>
                <p>Instrument: {{ instrument }}</p>
                <p class="card-text">{{ biography }}</p>
            </div>
        </div>
    </article>
</template>

<script>
import { ref, reactive } from 'vue'
import genreService from '../../services/genreService'

export default {
    name: 'ArtistItem',
    props: {
        name: String,
        genre: String,
        price: Number,
        instrument: String,
        biography: String,
        rating: Number,
        image: String
    },
    setup(props){

        const { getGenreByName, genreByName } = genreService();

        const styleObject = reactive({
            border: '2px solid gray'
        });

        getGenreByName(props.genre)
            .then(() => {
                styleObject.border = `5px solid ${genreByName.value.color}`;
            });

        const artistGenre = ref(props.genre.toLowerCase());

        

        return {
            artistGenre,
            styleObject
        }
    }
}
</script>

<style scoped>

img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.star {
        height: 25px;
        width: 25px;
}

.rating-number {
    margin-top: 2px;
    margin-left: 0.5rem;
}

</style>