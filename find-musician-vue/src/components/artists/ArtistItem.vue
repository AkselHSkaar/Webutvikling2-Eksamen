<template>
    <article :class="artistGenre">
        <div class="card">
            <img :src="`https://localhost:5001/images/${image}`" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{ name }}</h5>
                <div class="d-flex align-items-start pb-3">
                    <p v-show="parseInt(rating) < 1">Ingen rating enda</p>
                    <img v-if="parseInt(rating) > 0" class="star" :src="require('@/assets/star.png')">
                    <img v-if="parseInt(rating) > 1" class="star" :src="require('@/assets/star.png')">
                    <img v-if="parseInt(rating) > 2" class="star" :src="require('@/assets/star.png')">
                    <img v-if="parseInt(rating) > 3" class="star" :src="require('@/assets/star.png')">
                    <img v-if="parseInt(rating) > 4" class="star" :src="require('@/assets/star.png')">
                    <p>{{rating.toFixed(1)}}</p>
                </div>
                <p>Sjanger: {{ genre }}, pris per time: {{ price }},- NOK</p>
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
    setup(props){

    const artistGenre = ref(props.genre.toLowerCase());

    const changeGenreName = () => {
        if ( artistGenre.value === "edm / dj" ){
            artistGenre.value = "edm";

        }else if ( artistGenre.value === "hip hop" ) {
            artistGenre.value = "hiphop"
        }
    }

    changeGenreName();

    return {
        artistGenre
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

.star{
        height: 25px;
        width: 25px;
}

.rock {
    border: 2px solid #ff0000;
}

.country {
    border: 2px solid #800000;
}

.pop {
    border: 2px solid #800080;
}

.hiphop {
    border: 2px solid #ffd700;
}

.jazz {
    border: 2px solid #bada55;
}

.blues {
    border: 2px solid #003366;
}

.folk {
    border: 2px solid #7fe5f0;
}

.edm {
    border: 2px solid #ff80ed;
}

</style>