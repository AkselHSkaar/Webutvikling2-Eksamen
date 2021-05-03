import axios from 'axios';
import { reactive, toRefs } from 'vue'

export default function bookingService() {

    const booking = reactive({ bookingList: [], bookingById: {}, searchResult: [] });

    const getBookings = () => {
        return axios("https://localhost:5001/booking")
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
        //Return is needed to wait for response before sorting bookingList
        return axios(`https://localhost:5001/booking/Search/${input}`)
                .then( response => {
                    booking.searchResult = response.data;
                } );
    }

    const createNewBooking = ( postBooking, imageObject ) => {
        axios.post("https://localhost:5001/booking/", postBooking)
            .then( response => {

                axios({
                    method: "POST",
                    url: "https://localhost:5001/booking/UploadImage",
                    data: imageObject,
                    config: { headers: {"Content-type" : "multipart/form-data"} }
                })

                booking.bookingList.push( response.data );
            } )
    }

    const putBooking = ( bookingToEdit, imageObject ) => {
        axios.put("https://localhost:5001/booking/", bookingToEdit)
            .then( () => {
                axios({
                    method: "POST",
                    url: "https://localhost:5001/artist/UploadImage",
                    data: imageObject,
                    config: { headers: {"Content-type" : "multipart/form-data"} }
                })
            })
    }

    const deleteBooking = ( id ) => {
        axios.delete(`https://localhost:5001/booking/${id}`)
    }

    return {
        ...toRefs(booking),
        getBookings,
        getBookingById,
        searchForBooking,
        createNewBooking,
        putBooking,
        deleteBooking 
    }
}