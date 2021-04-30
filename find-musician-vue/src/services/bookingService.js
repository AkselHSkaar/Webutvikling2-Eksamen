import axios from 'axios';
import { reactive, toRefs } from 'vue'

export default function bookingService() {

    const booking = reactive({ bookingList: [], bookingById: {}, searchResult: [] });

    const getBookings = () => {
        axios("https://localhost:5001/booking")
            .then( response => {
                booking.bookingList = response.data;
            } )
    }

    const getBookingById = ( id ) => {
        axios(`https://localhost:5001/booking/${id}`)
            .then( response => {
                booking.bookingById = response.data;
            } );
    }

    const searchForBooking = ( input ) => {
        //Return is needed to wait for response before soring artistList
        return axios(`https://localhost:5001/booking/Search/${input}`)
                .then( response => {
                    booking.searchResult = response.data;
                } );
    }

    const createNewBooking = ( postBooking ) => {
        axios.post("https://localhost:5001/booking/", postBooking)
            .then( response => {
                booking.bookingList.push( response.data );
            } )
    }

    return {
        ...toRefs(booking),
        getBookings,
        getBookingById,
        searchForBooking,
        createNewBooking
    }
}