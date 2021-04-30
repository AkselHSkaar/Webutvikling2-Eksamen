<template>
    <article>
        <div class="card">

            <div class="card-body">
                <h5 class="card-title">{{ title }}</h5>
                <p>{{ description }}</p>
                <p>Dato: {{ date }}, fra kl {{ startTime }}  til kl {{ endTime }}</p>
                <p>Sjanger: {{ genre }}</p>
                <p>Pris: {{ price }},- NOK</p>
                <p>{{ customerName }}</p>
                <p>{{ customerEmail }}</p>
                <p>{{ customerPhone }}</p>
                <button @click="getBooking" class="btn btn-primary" type="button" data-bs-toggle="collapse" :data-bs-target="`#collapse${id}`" aria-expanded="false" aria-controls="collapse">
                    Rediger
                </button>
                <!--
                <div class="collapse" :id="`collapse${id}`">
                    <div>
                        <form>
                            <div class="form-floating mb-3">
                                <input v-model="artistById.name" type="text" id="name-input" class="form-control" placeholder="Navn">
                                <label for="name-input">Navn</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input v-model="artistById.genre" type="text" id="genre-input" class="form-control" placeholder="Sjanger">
                                <label for="genre-input">Sjanger</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input v-model="artistById.price" type="text" id="price-input" class="form-control" placeholder="Pris">
                                <label for="price-input">Pris per time</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input v-model="artistById.instrument" type="text" id="instrument-input" class="form-control" placeholder="Instrument">
                                <label for="instrument-input">Instrument: (Fullt band, Sang, Gitar..)</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input v-model="artistById.biography" type="text" id="biography-input" class="form-control" placeholder="Biografi">
                                <label for="biography-input">Biografi</label>
                            </div>
                            <div>
                                <div>
                                    <label>Bilde</label>
                                </div>
                                <input class="form-control" type="file">
                            </div>
                            <div>
                                <input @click="updateArtist(artistById.id)" type="button" value="Rediger artist" class="form-control bg-success text-white mt-2">
                            </div>
                        </form>
                    </div>
                </div>
                -->
            </div>
        </div>
    </article>
</template>

<script>
//import bookingService from '../../services/bookingService'

export default {
    name: 'AdminArtistItem',
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
    },
    setup(){


        //const { bookingById ,getBookingById} = bookingService();

        //const getBooking = () => {
        //    getBookingById( props.id );
        //}

/*
        const updateBooking = () => {
            getArtistById( props.id );

            const editArtist = (element) => {
            const artistToEdit = 
            {
                id: parseInt( element.id ),
                name: element.name,
                genre: element.genre,
                price: parseInt( element.price ),
                instrument: element.instrument,
                biography: element.biography,
                rating: element.rating,
                image: element.image
            }
                putArtist( artistToEdit );
                location.reload();
            }

            editArtist(artistById.value);

        }

*/
        
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