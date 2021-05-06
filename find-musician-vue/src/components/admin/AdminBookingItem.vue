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
                <button @click="getBooking" class="btn btn-primary" type="button" data-bs-toggle="collapse" :data-bs-target="`#collapse${id}`" aria-expanded="false" aria-controls="collapse">
                    Rediger
                </button>
                <button @click="deleteFromDb" class="btn btn-danger" type="button">
                    Slett
                </button>
                <div class="collapse" :id="`collapse${id}`">
                    <div>
                        <form>
                            <div class="form-floating mb-3">
                                <input v-model="bookingById.title" type="text" id="title-input" class="form-control" placeholder="Navn">
                                <label for="title-input">Tittel</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input v-model="bookingById.description" type="text" id="description-input" class="form-control" placeholder="Navn">
                                <label for="description-input">Beskrivelse</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input v-model="bookingById.date" type="date" class="form-control" placeholder="Navn" required>
                                <label>dato</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input v-model="bookingById.date" type="text" id="date-input" class="form-control" placeholder="Navn">
                                <label for="date-input">Dato</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input v-model="bookingById.startTime" type="text" id="startTime-input" class="form-control" placeholder="Navn">
                                <label for="startTime-input">Start klokkeslett</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input v-model="bookingById.endTime" type="text" id="endTime-input" class="form-control" placeholder="Navn">
                                <label for="EndTime-input">Slutt klokkelsett</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input v-model="bookingById.genre" type="text" id="genre-input" class="form-control" placeholder="Sjanger">
                                <label for="genre-input">Sjanger</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input v-model="bookingById.price" type="text" id="price-input" class="form-control" placeholder="Sjanger">
                                <label for="price-input">Pris</label>
                            </div>
                            <h5>Kontaktinfo:</h5>
                            <div class="form-floating mb-3">
                                <input v-model="bookingById.customerName" type="text" id="customerName-input" class="form-control" placeholder="Sjanger">
                                <label for="customerName-input">Navn</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input v-model="bookingById.customerEmail" type="text" id="customerEmail-input" class="form-control" placeholder="Sjanger">
                                <label for="customerEmail-input">Email</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input v-model="bookingById.customerPhone" type="text" id="customerPhone-input" class="form-control" placeholder="Sjanger">
                                <label for="customerPhone-input">Telefonnummer</label>
                            </div>
                            <div>
                                <div>
                                    <label>Bilde</label>
                                </div>
                                <input @change="setImage" class="form-control" type="file">
                            </div>
                            <div>
                                <input @click="updateBooking(bookingById.id)" type="button" value="Rediger oppdrag" class="form-control bg-success text-white mt-2">
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
        const changedImage = ref(false);

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
                title: element.title,
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
                putBooking( bookingToEdit, imageObject );
                location.reload();
            }

            editBooking(bookingById.value, bookingById.image);
            
            }else {
                const editBookingNoImage = ( element ) => {
                    const bookingToEdit = {
                        id: parseInt( element.id ),
                        title: element.title,
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

                    putBookingNoImage( bookingToEdit );
                    location.reload();
                }

                editBookingNoImage(bookingById.value);
            }

        }

        const deleteFromDb = () => {
            deleteBooking( props.id );
            location.reload();
        }

        return {
            getBooking,
            bookingById,
            updateBooking,
            deleteFromDb,
            setImage
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