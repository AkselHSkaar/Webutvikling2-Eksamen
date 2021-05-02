import axios from 'axios';
import { reactive, toRefs } from 'vue'

export default function reviewService() {

    const review = reactive({ reviewList: [], reviewById: {} });

    const getReviews = () => {
        axios("https://localhost:5001/review")
            .then( response => {
                review.reviewList = response.data;
            } )
    }

    const getReviewById = ( id ) => {
        axios(`https://localhost:5001/review/${id}`)
            .then( response => {
                review.reviewById = response.data;
            } );
    }

    const createNewReview = ( postReview ) => {
        axios.post("https://localhost:5001/review/", postReview)
            .then( response => {
                review.reviewList.push( response.data );
            } )
    }

    const putReview = ( reviewToEdit ) => {
        axios.put("https://localhost:5001/review/", reviewToEdit)
    }

    const deleteReview = ( id ) => {
        axios.delete(`https://localhost:5001/review/${id}`)
    }

    return {
        ...toRefs(review),
        getReviews,
        getReviewById,
        createNewReview,
        putReview,
        deleteReview
    }
}