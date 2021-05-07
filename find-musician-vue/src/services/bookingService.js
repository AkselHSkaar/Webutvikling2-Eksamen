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
        return axios(`https://localhost:5001/booking/Search/${input}`)
                .then( response => {
                    booking.searchResult = response.data;
                } );
    }

    const createNewBooking = ( postBooking, imageObject ) => {
        return axios.post("https://localhost:5001/booking/", postBooking)
            .then(async response => {
                if (imageObject){
                    await axios({
                        method: "POST",
                        url: "https://localhost:5001/booking/UploadImage",
                        data: imageObject,
                        config: { headers: {"Content-type" : "multipart/form-data"} }
                    })
                }

                booking.bookingList.push( response.data );
            } )
    }

    const createNewBookingNoImage = ( postBooking ) => {
        axios.post("https://localhost:5001/booking/", postBooking)
            .then( response => {
                booking.bookingList.push( response.data );
            } )
    }

    const putBooking = ( bookingToEdit, imageObject ) => {
        return axios.put("https://localhost:5001/booking/", bookingToEdit)
            .then(async () => {
                await axios({
                    method: "POST",
                    url: "https://localhost:5001/artist/UploadImage",
                    data: imageObject,
                    config: { headers: {"Content-type" : "multipart/form-data"} }
                })
            })
    }

    //Update booking without changing image
    const putBookingNoImage = ( bookingToEdit ) => {
        return axios.put("https://localhost:5001/booking/", bookingToEdit)
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
        createNewBookingNoImage,
        putBooking,
        putBookingNoImage,
        deleteBooking 
    }
}