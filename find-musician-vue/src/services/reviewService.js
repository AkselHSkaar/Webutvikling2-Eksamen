import axios from 'axios';
import { reactive, toRefs } from 'vue'

export default function reviewService() {

    const review = reactive({ reviewList: [], reviewById: {}, reviewByArtist: [] });

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

    const getByArtist = ( artist ) => {
        return axios(`https://localhost:5001/review/getByArtist/${artist}`)
            .then( response => {
                review.reviewByArtist = response.data;
            } )
    }

    const createNewReview = ( postReview ) => {
        return axios.post("https://localhost:5001/review/", postReview)
            .then( response => {
                review.reviewList.push( response.data );
            } )
    }

    const putReview = ( reviewToEdit ) => {
        axios.put("https://localhost:5001/review/", reviewToEdit)
    }

    const deleteReview = ( id ) => {
        return axios.delete(`https://localhost:5001/review/${id}`)
    }

    return {
        ...toRefs(review),
        getReviews,
        getReviewById,
        getByArtist,
        createNewReview,
        putReview,
        deleteReview,
    }
}