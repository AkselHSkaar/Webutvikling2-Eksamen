<template>
    <section>
        <div>
            <h2 class="mb-5">Legg til et nytt oppdrag</h2>
        </div>
        <div class="form-floating mb-3">
            <input v-model="title" type="text" id="title-input" class="form-control" placeholder="Navn">
            <label for="name-input">Tittel</label>
        </div>
        <div class="form-floating mb-3">
            <input v-model="description" type="text" id="description-input" class="form-control" placeholder="Navn">
            <label for="name-input">Beskrivelse</label>
        </div>
        <div class="form-floating mb-3">
            <input v-model="date" type="text" id="date-input" class="form-control" placeholder="Navn">
            <label for="name-input">dato</label>
        </div>
        <div class="form-floating mb-3">
            <input v-model="startTime" type="text" id="startTime-input" class="form-control" placeholder="Navn">
            <label for="name-input">Start klokkeslett</label>
        </div>
        <div class="form-floating mb-3">
            <input v-model="endTime" type="text" id="endTime-input" class="form-control" placeholder="Navn">
            <label for="name-input">Slutt klokkeslett</label>
        </div>
        <select v-model="genre" class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
            <option value="0" disabled>Velg en sjanger</option>>
            <option v-for="( genre, i ) in genreList" :key="i" :value="genre.name">{{genre.name}}</option>
        </select>
        <div class="form-floating mb-3">
            <input v-model="price" type="text" id="price-input" class="form-control" placeholder="Pris">
            <label for="price-input">Totalpris for oppdrag</label>
        </div>
        <div>
            <h3 class="py-3">Kontaktinformasjon</h3>
        </div>
        <div class="form-floating mb-3">
            <input v-model="customerName" type="text" id="name-input" class="form-control" placeholder="Instrument">
            <label for="instrument-input">Navn</label>
        </div>
        <div class="form-floating mb-3">
            <input v-model="customerEmail" type="text" id="email-input" class="form-control" placeholder="Instrument">
            <label for="instrument-input">Email</label>
        </div>
        <div class="form-floating mb-3">
            <input v-model="customerPhone" type="text" id="number-input" class="form-control" placeholder="Instrument">
            <label for="instrument-input">Telefonnummer</label>
        </div>
        <div>
            <div>
                <label>Bilde</label>
            </div>
            <input @change="setImage" class="form-control" type="file">
        </div>
        <div>
            <input @click="addBooking" type="button" value="Legg til oppdrag" class="form-control bg-success text-white mt-2">
        </div>
    </section>
</template>

<script>
import { reactive, toRefs } from 'vue'
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
        getGenres();
        console.log(genreList);

        const imageObject = new FormData();

        const setImage = ( e ) => {
            imageObject.append("file", e.target.files[0]);
            newBooking.image = e.target.files[0].name;
        }

        const { createNewBooking } = bookingService();

        const addBooking = () => {
            const postBooking = {
                title: newBooking.title,
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

            createNewBooking( postBooking, imageObject );
        }

        return {
            ...toRefs(newBooking),
            addBooking,
            setImage,
            genreList
        }
    }
}
</script>