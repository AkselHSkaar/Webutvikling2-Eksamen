import axios from 'axios';
import { reactive, toRefs } from 'vue'

export default function bookingService() {

    const booking = reactive({ bookingList: [] });

    const getBookings = () => {
        axios("https://localhost:5001/booking")
            .then( response => {
                booking.bookingList = response.data;
            } )
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
        createNewBooking
    }
}