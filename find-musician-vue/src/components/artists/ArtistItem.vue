<template>
    <article>
        <div class="card">
            <img v-if="fromAssets == true" :src="require('@/assets/artist-placeholder.jpg')" class="card-img-top">
            <img v-else :src="`https://localhost:5001/images/${image}`" class="card-img-top">
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
                <p>Sjanger: {{ genre }}</p> 
                <p>per time: {{ price }},- NOK</p>
                <p>Instrument: {{ instrument }}</p>
                <p class="card-text">{{ biography }}</p>
            </div>
        </div>
    </article>
</template>

<script>
import { ref } from 'vue'

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
    setup( props ) {

        const fromAssets = ref(false);

        if ( props.image == "" ){
            fromAssets.value = true;
        }

        return {
            fromAssets
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