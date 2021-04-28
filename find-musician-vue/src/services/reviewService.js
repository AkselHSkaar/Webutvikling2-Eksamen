import axios from 'axios';
import { reactive, toRefs } from 'vue'

export default function reviewService() {

    const review = reactive({ reviewList: [] });

    const getReviews = () => {
        axios("https://localhost:5001/review")
            .then( response => {
                review.reviewList = response.data;
            } )
    }

    const createNewReview = ( postReview ) => {
        axios.post("https://localhost:5001/review/", postReview)
            .then( response => {
                review.reviewList.push( response.data );
            } )
    }

    return {
        ...toRefs(review),
        getReviews,
        createNewReview
    }
}