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
            <button @click="deleteFromDb" class="btn btn-danger">Slett</button>
        </div>
    </article>
</template>

<script>
import { ref } from 'vue'
import reviewService from '../../services/reviewService'

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
        const ratingArray = ref([]);


        for (let i = 0; i < props.stars; i++) {
            ratingArray.value.push(i);
        }

        const deleteFromDb = () => {
            deleteReview( props.id );
            location.reload();
        }

        return {
            ratingArray,
            deleteFromDb
        }
    }
}
</script>

<style scoped>
    .star {
        height: 25px;
    }
</style>