<template>
    <article>
        <div class="card mb-3" :class="bookingGenre">
            <div class="row g-0">
                <div class="col-md-4 col-lg-3">
                    <img :src="`https://localhost:5001/images/${image}`" class="card-img-top" alt="...">
                </div>
                <div class="col-md-8 col-lg-9">
                    <div class="card-body">
                        <h5 class="card-title">{{ title }}</h5>
                        <p class="fs-5">Dato: {{ date }}, fra kl {{ startTime }} til kl {{ endTime }}</p>
                        <p>Sjanger: {{ genre }}</p>
                        <p>Budsjett: {{ price }}</p>
                        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" :data-bs-target="`#collapse${id}`" aria-expanded="false" aria-controls="collapse">
                            Les mer
                        </button>
                    </div>
                </div> 
                <div class="collapse row col-12 p-3" :id="`collapse${id}`">
                    <div class="col-12 col-lg-6">
                        <p class="fs-5 fw-bold">Beskrivelse</p>
                        <p class="">{{ description }}</p>
                    </div>
                    <div class="col-12 col-lg-6">
                        <p class="fs-5 fw-bold">Kontaktinfo</p>
                        <p>Navn: {{ customerName }}</p>
                        <p>E-post: {{ customerEmail }}</p>
                        <p>Telefon: {{ customerPhone }}</p>
                    </div>
                </div>
            </div>
        </div>
    </article>
</template>

<script>
import { ref } from 'vue'

export default {
    name: 'BookingItem',
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

        const bookingGenre = ref(props.genre.toLowerCase());

        const changeGenreName = () => {
        if ( bookingGenre.value === "edm / dj" ){
            bookingGenre.value = "edm";
        }else if ( bookingGenre.value === "hip hop" ) {
            bookingGenre.value = "hiphop"
            }
        }

        changeGenreName();

        return{ bookingGenre }

    }
}
</script>

<style scoped>

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.rock {
    border: 2px solid #ff0000;
}

.country {
    border: 2px solid #800000;
}

.pop {
    border: 2px solid #800080;
}

.hiphop {
    border: 2px solid #ffd700;
}

.jazz {
    border: 2px solid #bada55;
}

.blues {
    border: 2px solid #003366;
}

.folk {
    border: 2px solid #7fe5f0;
}

.edm {
    border: 2px solid #ff80ed;
}

</style>