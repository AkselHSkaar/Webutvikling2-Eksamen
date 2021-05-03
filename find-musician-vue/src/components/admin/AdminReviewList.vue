<template>
    <section>
       <admin-review-item v-for="( review, i ) in reviewList" :key="i"
       :id="review.id"
       :stars="review.stars"
       :title="review.title"
       :text="review.text"
       :artist="review.artist"
       ></admin-review-item> 
    </section>
</template>

<script>
import reviewService from '../../services/reviewService'
import AdminReviewItem from './AdminReviewItem'

export default {
    name: 'AdminReviewList',
    components: {
        AdminReviewItem
    },
    setup() {
        
        const { getReviews, reviewList } = reviewService();

        getReviews();

        console.log(reviewList)

        return {
            reviewList
        }
    }
}
</script>