<template>
    <article>
        <div class="card">
            <img :src="`https://localhost:5001/images/${image}`" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{ title }}</h5>
                <p>{{ description }}</p>
                <p>Dato: {{ date }}, fra kl {{ startTime }}  til kl {{ endTime }}</p>
                <p>Sjanger: {{ genre }}</p>
                <p>Pris: {{ price }},- NOK</p>
                <h5>Kontaktinfo:</h5>
                <p>{{ customerName }}</p>
                <p>{{ customerEmail }}</p>
                <p>{{ customerPhone }}</p>
                <div>
                    <button @click="getBooking" class="btn btn-primary me-3" type="button" data-bs-toggle="collapse" :data-bs-target="`#collapse${id}`" aria-expanded="false" aria-controls="collapse">Rediger</button>
                    <button @click="deleteFromDb" class="btn btn-danger" type="button">Slett</button>
                </div>
                <div class="collapse mt-4" :id="`collapse${id}`">
                    <div>
                        <form :onsubmit="handleForm">
                            <div class="form-floating mb-3">
                                <input v-model="bookingById.title" @blur="inputChange" type="text" class="form-control">
                                <label>Tittel</label>
                            </div>
                            <div class="form-floating mb-3">
                                <textarea v-model="bookingById.description" @blur="inputChange" class="form-control"></textarea>
                                <label>Beskrivelse</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input v-model="bookingById.date" @blur="inputChange" type="date" class="form-control" required>
                                <label>dato</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input v-model="bookingById.startTime" @blur="inputChange" type="text" class="form-control">
                                <label>Start klokkeslett</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input v-model="bookingById.endTime" @blur="inputChange" type="text" class="form-control">
                                <label>Slutt klokkelsett</label>
                            </div>
                            <select v-model="bookingById.genre" @blur="inputChange" class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                <option v-for="( genre, i ) in genreList" :key="i" :value="genre.name">{{genre.name}}</option>
                            </select>
                            <div class="form-floating mb-3">
                                <input v-model="bookingById.price" @blur="inputChange" type="number" min="1" max="10000" class="form-control">
                                <label>Pris</label>
                            </div>
                            <h5>Kontaktinfo:</h5>
                            <div class="form-floating mb-3">
                                <input v-model="bookingById.customerName" @blur="inputChange" type="text" class="form-control">
                                <label>Navn</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input v-model="bookingById.customerEmail" @blur="inputChange" type="text" class="form-control">
                                <label>Email</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input v-model="bookingById.customerPhone" @blur="inputChange" type="text" class="form-control">
                                <label>Telefonnummer</label>
                            </div>
                            <div>
                                <div>
                                    <label>Bilde</label>
                                </div>
                                <input @change="setImage" class="form-control" type="file">
                            </div>
                            <div>
                                <input @click="submitCheck" type="submit" value="Rediger oppdrag" class="btn btn-success mt-4">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </article>
</template>

<script>
import bookingService from '../../services/bookingService'
import genreService from '../../services/genreService'
import { ref } from 'vue'

export default {
    name: 'AdminBookingItem',
    props: {
        id: Number,
        title: String,
        description: String,
        date: String,
        startTime: String,
        endTime: String,
        genre: String,
        price: Number,
        customerName: String,
        customerEmail: String,
        customerPhone: String,
        image: String
    },
    setup(props){

        const { getBookingById, bookingById, putBooking, putBookingNoImage, deleteBooking } = bookingService();
        const { getGenres, genreList } = genreService();
        const changedImage = ref(false);
        const handleForm = (event) => { event.preventDefault(); }

        getGenres();

        const getBooking = () => {
            getBookingById( props.id );
        }

        const imageObject = new FormData();

        const setImage = ( e ) => {
            imageObject.append("file", e.target.files[0]);
            bookingById.image = e.target.files[0].name;
            changedImage.value = true;
        }

        const updateBooking = () => {
            if (changedImage.value) {
            const editBooking = ( element, image ) => {
            const bookingToEdit = {
                id: parseInt( element.id ),
                title: element.title.toLowerCase(),
                description: element.description,
                date: element.date,
                startTime: element.startTime,
                endTime: element.endTime,
                genre: element.genre,
                price: parseInt( element.price ),
                customerName: element.customerName,
                customerEmail: element.customerEmail,
                customerPhone: element.customerPhone,
                image: image
            }


                putBooking( bookingToEdit, imageObject )
                    .then(() => {
                        location.reload();
                    });
            }

            editBooking(bookingById.value, bookingById.image);
            
            }else {
                const editBookingNoImage = ( element ) => {
                    const bookingToEdit = {
                        id: parseInt( element.id ),
                        title: element.title.toLowerCase(),
                        description: element.description,
                        date: element.date,
                        startTime: element.startTime,
                        endTime: element.endTime,
                        genre: element.genre,
                        price: parseInt( element.price ),
                        customerName: element.customerName,
                        customerEmail: element.customerEmail,
                        customerPhone: element.customerPhone,
                        image: props.image
                    }

                    putBookingNoImage( bookingToEdit )
                        .then(() => {
                            location.reload();
                        });
                }

                editBookingNoImage(bookingById.value);
            }

        }

        const deleteFromDb = () => {
            deleteBooking( props.id );
            location.reload();
        }

        const missingFields = ref(false);

        const inputChange = () => {
            if (bookingById.value.title != "" && bookingById.value.description != "" && parseInt(bookingById.value.price) >= 1 && parseInt(bookingById.value.price) <= 1000 && bookingById.value.date != "" && bookingById.value.startTime != "" && bookingById.value.endTime != "" && bookingById.value.genre != "" && bookingById.value.customerName != "" && bookingById.value.customerEmail != "" && bookingById.value.customerPhone != "") {
                missingFields.value = false;
            } else {
                missingFields.value = true;
            }
        }

        const submitCheck = () => {
            if (!missingFields.value) {
                updateBooking();
            }
        }

        return {
            getBooking,
            bookingById,
            updateBooking,
            deleteFromDb,
            setImage,
            genreList,
            missingFields,
            inputChange,
            submitCheck,
            handleForm
        }
        
    }
}
</script>

<style scoped>

img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

</style>