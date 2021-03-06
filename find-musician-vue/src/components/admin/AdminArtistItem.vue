<template>
    <article>
        <div class="card">
            <img :src="`https://localhost:5001/images/${image}`" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{ name }}</h5>
                <p>Pris per time: {{ price }},- NOK</p>
                <p class="card-text">{{ biography }}</p>
                <p>Rating (1-5): {{ rating }}</p>
                <p>Sjanger: {{ genre }}</p>
                <p>Instrument: {{ instrument }}</p>
                <div>
                    <button @click="getArtist" class="btn btn-primary me-3" type="button" data-bs-toggle="collapse" :data-bs-target="`#collapse${id}`" aria-expanded="false" aria-controls="collapse">
                        Rediger
                    </button>
                    <button @click="deleteFromDb" class="btn btn-danger" type="button">
                        Slett
                    </button>
                </div>
                <div class="collapse" :id="`collapse${id}`">
                    <div class="mt-4">
                        <form :onsubmit="handleForm">
                            <div class="form-floating mb-3">
                                <input v-model="artistById.name" @blur="inputChange" type="text" id="name-input" class="form-control" placeholder="Navn">
                                <label for="name-input">Navn</label>
                            </div>
                            <select v-model="artistById.genre" @blur="inputChange" class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                <option v-for="( genre, i ) in genreList" :key="i" :value="genre.name">{{genre.name}}</option>
                            </select>
                            <div class="form-floating mb-3">
                                <input v-model="artistById.price" @blur="inputChange" type="number" min="1" max="1000" id="price-input" class="form-control" placeholder="Pris">
                                <label for="price-input">Pris per time</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input v-model="artistById.instrument" @blur="inputChange" type="text" id="instrument-input" class="form-control" placeholder="Instrument">
                                <label for="instrument-input">Instrument: (Sang, Gitar..)</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input v-model="artistById.biography" @blur="inputChange" type="text" id="biography-input" class="form-control" placeholder="Biografi">
                                <label for="biography-input">Biografi</label>
                            </div>
                            <div>
                                <div>
                                    <label>Bilde</label>
                                </div>
                                <input @change="setImage" class="form-control" type="file">
                            </div>
                            <div>
                                <input @click="submitCheck" type="submit" value="Oppdater artist" class="btn btn-success mt-4">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </article>
</template>

<script>
import artistService from '../../services/artistService'
import genreService from '../../services/genreService'
import { ref } from 'vue'
import reviewService from '../../services/reviewService'

export default {
    name: 'AdminArtistItem',
    props: {
        id: Number,
        name: String,
        genre: String,
        price: Number,
        instrument: String,
        biography: String,
        rating: Number,
        numberOfRatings: Number,
        image: String
    },
    setup( props ){

        const { artistById, getArtistById, putArtist, putArtistNoImage, deleteArtist } = artistService();
        const { genreList, getGenres } = genreService();
        const { getByArtist, reviewByArtist, deleteReview } = reviewService();
        const changedImage = ref(false);
        const handleForm = (event) => { event.preventDefault(); }

        getGenres();

        const getArtist = () => {
            getArtistById( props.id );
        }

        const imageObject = new FormData();

        const setImage = ( e ) => {
            imageObject.append("file", e.target.files[0]);
            artistById.image = e.target.files[0].name;
            changedImage.value = true;
        }

        const updateArtist = () => {
            if (changedImage.value) {
            const editArtist = (element, image) => {
            const artistToEdit = {
                id: parseInt( element.id ),
                name: element.name.toLowerCase(),
                genre: element.genre,
                price: parseInt( element.price ),
                instrument: element.instrument,
                biography: element.biography,
                rating: element.rating,
                image: image
            }
                putArtist( artistToEdit, imageObject )
                    .then(() => {
                        location.reload();
                    });
            }
                editArtist(artistById.value, artistById.image);
            }else{
                const editArtistNoImage = (element) => {
                const artistToEdit = {
                    id: parseInt( element.id ),
                    name: element.name.toLowerCase(),
                    genre: element.genre,
                    price: parseInt( element.price ),
                    instrument: element.instrument,
                    biography: element.biography,
                    rating: element.rating,
                    image: props.image
                }
                putArtistNoImage( artistToEdit )
                    .then(() => {
                        location.reload();
                    });
                }
                editArtistNoImage(artistById.value);
            }
        }

        const deleteFromDb = () => {
            getByArtist(props.name)
                .then( () => {
                    //Delete all reviews of artist from database
                    reviewByArtist.value.forEach(review => {
                        deleteReview(review.id);
                    });
                })
                .then(() => {
                    //Delete the artist from the database
                    deleteArtist(props.id)
                        .then(() => {
                            location.reload();
                        })
                });
        }

        const missingFields = ref(false);

        const inputChange = () => {
            if (artistById.value.name != "" && artistById.value.genre != "" && parseInt(artistById.value.price) >= 1 && parseInt(artistById.value.price) <= 1000 && artistById.value.instrument != "" && artistById.value.biography != "") {
                missingFields.value = false;
            } else {
                missingFields.value = true;
            }
        }

        const submitCheck = () => {
            if (!missingFields.value) {
                updateArtist();
            }
        }

        return {
            artistById,
            updateArtist,
            genreList,
            getArtist,
            deleteFromDb,
            setImage,
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