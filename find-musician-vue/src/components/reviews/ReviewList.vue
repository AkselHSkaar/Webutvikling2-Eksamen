<template>
    <section>
        <h3>Alle omtaler:</h3>
        <review-item v-for="( review, i ) in reviewList" :key="i"
        :id="review.id"
        :stars="review.stars"
        :title="review.title"
        :text="review.text"
        :artist="review.artist"
        ></review-item>
    </section>
</template>

<script>
import reviewService from '../../services/reviewService'
import ReviewItem from './ReviewItem'

export default {
    name: 'ReviewList',
    components: {
        ReviewItem
    },
    setup() {
        
        const { reviewList, getReviews } = reviewService();

        getReviews();

        return {
            reviewList
        }

    }
}
</script>