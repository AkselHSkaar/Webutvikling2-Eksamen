<template>
    <section>
        <div class="row g-4">
            <div class="col-12 col-sm-6 col-lg-4 col-xl-3" v-for="( review, i ) in reviewList" :key="i">
                <admin-review-item
                    :id="review.id"
                    :stars="review.stars"
                    :title="review.title"
                    :text="review.text"
                    :artist="review.artist"
                ></admin-review-item>
            </div>
        </div>
        
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

        return {
            reviewList
        }
    }
}
</script>