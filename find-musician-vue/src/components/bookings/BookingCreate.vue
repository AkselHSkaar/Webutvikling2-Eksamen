<template>
    <section>
        <form :onsubmit="handleForm">
            <div>
                <h2 class="mb-5">Legg til et nytt oppdrag</h2>
            </div>
            <div class="form-floating mb-3">
                <input v-model="title" @blur="inputChange" type="text" id="title-input" class="form-control" placeholder="Navn" required>
                <label for="title-input">Tittel</label>
            </div>
            <div class="form-floating mb-3">
                <input v-model="description" @blur="inputChange" type="text" id="description-input" class="form-control" placeholder="Navn" required>
                <label for="description-input">Beskrivelse</label>
            </div>
            <div class="form-floating mb-3">
                <input v-model="date" type="date" id="date-input" @blur="inputChange" class="form-control" placeholder="Navn" required>
                <label for="date-input">dato</label>
            </div>
            <div class="form-floating mb-3">
                <input v-model="startTime" @blur="inputChange" type="text" id="start-time-input" class="form-control" placeholder="Navn" required>
                <label for="start-time-input">Start klokkeslett</label>
            </div>
            <div class="form-floating mb-3">
                <input v-model="endTime" @blur="inputChange" type="text" id="end-time-input" class="form-control" placeholder="Navn" required>
                <label for="end-time-input">Slutt klokkeslett</label>
            </div>
            <select v-model="genre" @blur="inputChange" id="select-genre-input" class="form-select form-select-lg mb-3 py-3 fs-6" aria-label=".form-select-lg example" required>
                <option value="" disabled>Velg en sjanger</option>>
                <option v-for="( genre, i ) in genreList" :key="i" :value="genre.name">{{genre.name}}</option>
            </select>
            <div class="form-floating mb-3">
                <input v-model="price" @blur="inputChange" type="number" min="1" max="10000" id="price-input" class="form-control" placeholder="Pris" required>
                <label for="price-input">Totalpris for oppdrag</label>
            </div>
            <div>
                <h3 class="py-3">Kontaktinformasjon</h3>
            </div>
            <div class="form-floating mb-3">
                <input v-model="customerName" @blur="inputChange" type="text" id="name-input" class="form-control" placeholder="Navn" required>
                <label for="name-input">Navn</label>
            </div>
            <div class="form-floating mb-3">
                <input v-model="customerEmail" @blur="inputChange" type="text" id="email-input" class="form-control" placeholder="E-post" required>
                <label for="email-input">Email</label>
            </div>
            <div class="form-floating mb-3">
                <input v-model="customerPhone" @blur="inputChange" type="text" id="number-input" class="form-control" placeholder="Telefon" required>
                <label for="number-input">Telefonnummer</label>
            </div>
            <div>
                <div>
                    <label>Bilde</label>
                </div>
                <input @change="setImage" class="form-control" type="file">
            </div>
            <div class="mt-4">
                <input @click="submitCheck" type="submit" value="Legg til oppdrag" class="btn" :class="missingFields ? 'btn-secondary' : 'btn-success'">
            </div>
        </form>
    </section>
</template>

<script>
import { ref, reactive, toRefs } from 'vue'
import bookingService from '../../services/bookingService'
import genreService from '../../services/genreService'

export default {
    name: 'BookingCreate',
    setup() {
        
        const newBooking = reactive({ 
            title: "", 
            description: "", 
            date: "", 
            startTime: "", 
            endTime: "", 
            genre: "", 
            price: "",  
            customerName: "",
            customerEmail: "",
            customerPhone: "",
            image: ""
        })

        const {genreList, getGenres} = genreService();
        const handleForm = (event) => { event.preventDefault(); }
        
        getGenres();

        const imageObject = new FormData();

        const setImage = ( e ) => {
            imageObject.append("file", e.target.files[0]);
            newBooking.image = e.target.files[0].name;
        }

        const { createNewBooking, createNewBookingNoImage } = bookingService();

        const addBooking = () => {
            const postBooking = {
                title: newBooking.title.toLowerCase(),
                description: newBooking.description,
                date: newBooking.date,
                startTime: newBooking.startTime,
                endTime: newBooking.endTime,
                genre: newBooking.genre,
                price: parseInt(newBooking.price),
                customerName: newBooking.customerName,
                customerEmail: newBooking.customerEmail,
                customerPhone: newBooking.customerPhone,
                image: newBooking.image
            }

            if (newBooking.image != ""){
                createNewBooking( postBooking, imageObject )
                    .then(() => {
                        location.reload();
                    });
            } else {
                createNewBookingNoImage( postBooking )
                    .then(() => {
                        location.reload();
                    });
            }
        }

        const missingFields = ref(true);

        const inputChange = () => {
            if (newBooking.title != "" && newBooking.description != "" && newBooking.date != "" && newBooking.startTime != "" && newBooking.endTime != "" && newBooking.genre != "" && newBooking.price != "" && newBooking.price >= 1 && newBooking.price <= 10000 && newBooking.customerName != "" && newBooking.customerEmail != "" && newBooking.customerPhone != "") {
                missingFields.value = false;
            }
        }

        const submitCheck = () => {
            if (!missingFields.value) {
                addBooking();
            }
        } 

        return {
            ...toRefs(newBooking),
            addBooking,
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