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
                <h6 class="card-subtitle mb-2 text-muted text-capitalize">Artist: {{artist}}</h6>
                <p class="card-text">{{text}}</p>
            </div>
        </div>
    </article>
</template>

<script>
import { ref } from 'vue'

export default {
    name: 'ReviewItem',
    props: {
        id: Number,
        stars: Number,
        title: String,
        text: String,
        artist: String
    },
    setup(props){

        const ratingArray = ref([]);
        
        for (let i = 0; i < props.stars; i++) {
            ratingArray.value.push(i);
        }

        return {ratingArray}
    }
}
</script>

<style scoped>
    .star{
        height: 25px;
    }
</style>