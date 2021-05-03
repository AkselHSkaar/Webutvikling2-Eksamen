<template>
    <section class="row g-4">
        <div class="col-12 col-sm-6 col-lg-4 col-xl-3" v-for="( review, i ) in reviewList" :key="i">
            <review-item
                :id="review.id"
                :stars="review.stars"
                :title="review.title"
                :text="review.text"
                :artist="review.artist"
            ></review-item>
        </div>
        
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